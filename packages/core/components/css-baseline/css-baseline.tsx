import React, { ReactElement } from 'react'
import flush, { flushToHTML } from 'styled-jsx/server'

export type FlushToReact = <T>(opts?: { nonce?: string }) => Array<ReactElement<T>>
export type FlushToHTML = (opts?: { nonce?: string }) => string

const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {

  return (
    <>
      {children}
      <style global jsx>{`
        :root[data-theme="light"] {
          --npui-color-gray-50: hsl(0 0% 98%);
          --npui-color-gray-100: hsl(0 0% 95.9%);
          --npui-color-gray-200: hsl(240 5.9% 90%);
          --npui-color-gray-300: hsl(240 4.9% 83.9%);
          --npui-color-gray-400: hsl(240 5% 64.9%);
          --npui-color-gray-500: hsl(240 3.8% 46.1%);
          --npui-color-gray-600: hsl(240 5.2% 33.9%);
          --npui-color-gray-700: hsl(240 5.3% 26.1%);
          --npui-color-gray-800: hsl(240 3.7% 15.9%);
          --npui-color-gray-900: hsl(240 5.9% 10%);
          --npui-color-gray-950: hsl(240 7.3% 8%);
        }
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
