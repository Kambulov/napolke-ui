import fs from 'fs-extra'
import path from 'path'
import { optimize } from 'svgo'
import { transform } from '@babel/core'
import {
  moduleBabelConfig,
  allModulesBabelConfig,
  makeBasicDefinition
} from './utils'
// import svgoConfig from './svgo.config'

const outputDir = path.join(__dirname, '../', 'dist')
const sourceFile = path.join(__dirname, '../', 'source')

export default (async () => {
  try {
    await fs.remove(outputDir)
    const files = fs.readdirSync(sourceFile)
    let exports = ''
    let definition = makeBasicDefinition()

    const promises = Array.from(files).map(async (icon: any) => {
      if (icon.endsWith('.svg')) {
        const fileName = path.basename(icon, '.svg')
        const filePath = path.join(sourceFile, icon)

        const content = fs.readFileSync(filePath, 'utf-8')

        const result = optimize(content, {
          plugins: [{ name: 'removeXMLNS' }, { name: 'removeTitle' }]
        })

        const svgString = groupSvgContent(result.data)

        const component = `import React from 'react';
          const ${fileName} = ({ color = 'currentColor', size = 24, style, ...props }) => {
            return (${svgString})
          }
          export default ${fileName};
        `

        exports += `export { default as ${fileName} } from './${fileName}';\n`
        definition += `export const ${fileName}: Icon;\n`

        const componentDefinition = `${makeBasicDefinition()}declare const ${fileName}: Icon;
          export default ${fileName}\n`

        const componentCode = transform(component, moduleBabelConfig).code
        await fs.outputFile(
          path.join(outputDir, `${fileName}.d.ts`),
          componentDefinition
        )
        await fs.outputFile(
          path.join(outputDir, `${fileName}.js`),
          componentCode
        )
      }
    })

    await Promise.all(promises)
    const allModulesCode = transform(exports, allModulesBabelConfig).code
    await fs.outputFile(path.join(outputDir, 'index.d.ts'), definition)
    await fs.outputFile(path.join(outputDir, 'index.tsx'), allModulesCode)
  } catch (error) {
    console.error(`Error reading SVG files: ${error.message}`)
  }
})()

const groupSvgContent = (svgString) => {
  return svgString
    .toString()
    .replace(/clip-rule/g, 'clipRule')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-opacity/g, 'strokeOpacity')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stop-opacity/g, 'stopOpacity')
    .replace(/stop-color/g, 'stopColor')
    .replace(
      /<svg([^>]+)>/,
      `<svg$1 {...props} height={size} width={size} style={{color: color || 'currentColor'}}> `
    )
}
