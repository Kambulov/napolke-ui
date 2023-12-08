import fs from 'fs-extra'
import path from 'path'
import { optimize } from 'svgo';
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
const sourceFile = path.join(__dirname, '../', 'source')

export default (async () => {
  try {
    await fs.remove(outputDir)
    const files = fs.readdirSync(sourceFile)
    let exports = ''
    let definition = makeBasicDefinition()

    const promises = Array.from(files).map(async (icon:any)  => {
      if (icon.endsWith('.svg')) {
        const fileName = path.basename(icon, '.svg');
        const filePath = path.join(sourceFile, icon);

        const content = fs.readFileSync(filePath, 'utf-8');

        const result = await optimize(content, { plugins: [
            { name: 'removeXMLNS' },
            { name: 'removeTitle' },
            { name: 'removeDimensions' },
          ]});

        const svgString = groupSvgContent(result.data);

        const component = `import React from 'react';
          const ${fileName} = ({ color = 'currentColor', size = 24, style, ...props }) => {
            return (${svgString})
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

const groupSvgContent = (svgString) => {
  return svgString
     .toString()
     .replace(/clip-rule/g, 'clipRule')
     .replace(/fill-rule/g, 'fillRule')
     .replace(/<svg([^>]+)>/, `<svg$1 {...props} height={size} width={size} viewBox={\`0 0 \${size} \${size}\`} style={{color: color || 'currentColor'}}> `);
}

function getSVGOOption() {

  return {
    plugins: [
      { cleanupAttrs: false },
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeTitle: true },
      { removeDesc: true },
      { removeUselessDefs: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { removeEmptyContainers: true },
      { removeViewBox: false },
      { cleanupEnableBackground: true },
      { convertStyleToAttrs: true },
      { convertPathData: true },
      { convertTransform: true },
      { removeUnknownsAndDefaults: true },
      { removeNonInheritableGroupAttrs: true },
      { removeUselessStrokeAndFill: false },
      { removeUnusedNS: true },
      { cleanupIDs: true },
      { cleanupNumericValues: true },
      { moveElemsAttrsToGroup: true },
      { moveGroupAttrsToElems: true },
      { collapseGroups: true },
      { removeRasterImages: false },
      // { mergePaths: true },
      { convertShapeToPath: true },
      { sortAttrs: true },
      { removeDimensions: true },
      { removeAttrs: { attrs: ['class'] } },
    ],
  };
}