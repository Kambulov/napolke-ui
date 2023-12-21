import React, { ReactElement } from 'react'
import flush, { flushToHTML } from 'styled-jsx/server'
import {Theme} from "../themes/presets";

export type FlushToReact = <T>(opts?: { nonce?: string }) => Array<ReactElement<T>>
export type FlushToHTML = (opts?: { nonce?: string }) => string

const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  console.log(' Object.keys(Theme.palette)', Object.keys(Theme.palette))
  let obj = {};
  Object.keys(Theme.palette).forEach((item)=> {
    const regex = /var\(([^)]+)\)/;
    // @ts-ignore
    const matches = Theme.palette[item].name.match(regex);
    obj = {
      ...obj,
      // @ts-ignore
      [matches[1]] : Theme.palette[item].value
    }
  })
  const cssString = Object.entries(obj)
     .map(([key, value]) => `  ${key}: ${value};`)
     .join('\n');

  const result = `:root[data-theme="light"] {\n${cssString}\n}`;
  console.log(result);

  return (
    <>
      {children}
      <style global jsx>{`
        ${result}
        :root[data-theme="dark"] {
          --npui-color-gray-50: hsl(240 5.1% 15%);
          --npui-color-gray-100: hsl(240 5.7% 18.2%);
          --npui-color-gray-200: hsl(240 4.6% 22%);
          --npui-color-gray-300: hsl(240 5% 27.6%);
          --npui-color-gray-400: hsl(240 5% 35.5%);
          --npui-color-gray-500: hsl(240 3.7% 44%);
          --npui-color-gray-600: hsl(240 5.3% 58%);
          --npui-color-gray-700: hsl(240 5.6% 73%);
          --npui-color-gray-800: hsl(240 7.3% 84%);
          --npui-color-gray-900: hsl(240 9.1% 91.8%);
          --npui-color-gray-950: hsl(0 0% 95%);
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          padding: 0;
          min-height: 100%;
          position: relative;
          overflow-x: hidden;
          font-family: ${Theme.font.sans};
        }
      `}</style>
    </>
  )
}

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: FlushToReact
  flushToHTML: FlushToHTML
}

const MemoCssBaseline = React.memo(CssBaseline) as MemoCssBaselineComponent<
  React.PropsWithChildren<unknown>
>
MemoCssBaseline.flush = flush
MemoCssBaseline.flushToHTML = flushToHTML

export default MemoCssBaseline
