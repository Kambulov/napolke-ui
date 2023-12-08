export const moduleBabelConfig = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-runtime',
  ],
  minified: true,
}

export const allModulesBabelConfig = {
  presets: ['@babel/preset-env'],
  minified: true,
}

export const makeBasicDefinition = (): string => {
  return `import React from 'react';
interface Props extends React.SVGProps<SVGElement> {
  color?: string;
  size?: number | string;
}
type Icon = React.FunctionComponent<Props>;\n`
}
