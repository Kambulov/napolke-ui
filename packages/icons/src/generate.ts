import fs from 'fs-extra'
import path from 'path'
import SVGO from 'svgo/lib/svgo'
import svgoConfigs from './svgo.config'
import { transform } from '@babel/core'
import {
  moduleBabelConfig,
  allModulesBabelConfig,
  replaceAll,
  toHumpName,
  toComponentName,
  makeBasicDefinition,
} from './utils'

const outputDir = path.join(__dirname, '../', 'dist')
const sourceFile = path.join(__dirname, '../', '.source')

export default (async () => {
  await fs.remove(outputDir)
  try {
    const files = fs.readdirSync(sourceFile)
    let exports = ''
    let definition = makeBasicDefinition()

    const promises = Array.from(files).map(async (icon:any)  => {
      if (icon.endsWith('.svg')) {
        const fileName = path.basename(icon, '.svg');
        const filePath = path.join(sourceFile, icon);

        // Чтение контента файла
        const content = fs.readFileSync(filePath, 'utf-8');


        const component = `import React from 'react';
          const ${fileName} = ({ color = 'currentColor', size = 24, style, ...props }) => {
            return (${content})
          }
          export default ${fileName};`

        exports += `export { default as ${fileName} } from './${fileName}';\n`
        definition += `export const ${fileName}: Icon;\n`

        const componentDefinition = `${makeBasicDefinition()}declare const ${fileName}: Icon;
export default ${fileName}\n`
        const componentCode = transform(component, moduleBabelConfig).code
        await fs.outputFile(path.join(outputDir, `${fileName}.d.ts`), componentDefinition)
        await fs.outputFile(path.join(outputDir, `${fileName}.js`), componentCode)
      }
    });
    await Promise.all(promises)
    const allModulesCode = transform(exports, allModulesBabelConfig).code
    await fs.outputFile(path.join(outputDir, 'index.d.ts'), definition)
    await fs.outputFile(path.join(outputDir, 'index.js'), allModulesCode)
  } catch (error) {
    console.error(`Error reading SVG files: ${error.message}`);
  }
})()
