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
          --npui-color-primary: hsl(221.2 83.2% 53.3%);
          
          
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

          --npui-color-blue-50: hsl(213.8 100% 96.9%);
          --npui-color-blue-100: hsl(214.3 94.6% 92.7%);
          --npui-color-blue-200: hsl(213.3 96.9% 87.3%);
          --npui-color-blue-300: hsl(211.7 96.4% 78.4%);
          --npui-color-blue-400: hsl(213.1 93.9% 67.8%);;
          --npui-color-blue-500: hsl(217.2 91.2% 59.8%);
          --npui-color-blue-600: hsl(221.2 83.2% 53.3%);
          --npui-color-blue-700: hsl(224.3 76.3% 48%);
          --npui-color-blue-800: hsl(225.9 70.7% 40.2%);
          --npui-color-blue-900: hsl(224.4 64.3% 32.9%);
          --npui-color-blue-950: hsl(226.2 55.3% 18.4%);
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
