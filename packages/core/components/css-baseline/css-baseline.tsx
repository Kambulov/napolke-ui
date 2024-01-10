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

  Object.keys(Theme.layout).forEach((item)=> {
    const regex = /var\(([^)]+)\)/;
    // @ts-ignore
    const matches = Theme.layout[item].name.match(regex);
    obj = {
      ...obj,
      // @ts-ignore
      [matches[1]] : Theme.layout[item].value
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
        html,
        body {
          background-color: ${Theme.palette.background.name};
          color: ${Theme.palette.black.name};
        }

        html {
          font-size: 16px;
          --geist-icons-background: ${Theme.palette.background.name};
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

        #__next {
          overflow-x: hidden;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
          text-rendering: geometricPrecision;
          -webkit-tap-highlight-color: transparent;
        }

        p,
        small {
          font-weight: 400;
          color: inherit;
          letter-spacing: -0.005625em;
          font-family: ${Theme.font.sans};
        }

        p {
          margin: 1em 0;
          font-size: 1em;
          line-height: 1.625em;
        }

        small {
          margin: 0;
          line-height: 1.5;
          font-size: 0.875em;
        }

        b {
          font-weight: 600;
        }

        span {
          font-size: inherit;
          color: inherit;
          font-weight: inherit;
        }

        img {
          max-width: 100%;
        }

        a {
          cursor: pointer;
          font-size: inherit;
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-box-align: center;
          align-items: center;
          color: ${Theme.palette.link.name};
          text-decoration: ${Theme.expressiveness.linkStyle};
        }

        a:hover {
          text-decoration: ${Theme.expressiveness.linkHoverStyle};
        }

        ul,
        ol {
          padding: 0;
          list-style-type: none;
          margin: ${Theme.layout.gapHalf.name} ${Theme.layout.gapHalf.name} ${Theme.layout.gapHalf.name}
            ${Theme.layout.gap};
          color: ${Theme.palette.black.name};
        }

        ol {
          list-style-type: decimal;
        }

        li {
          margin-bottom: 0.625em;
          font-size: 1em;
          line-height: 1.625em;
        }

        ul li:before {
          content: '–';
          display: inline-block;
          color: ${Theme.palette.gray400.name};
          position: absolute;
          margin-left: -0.9375em;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: inherit;
          margin: 0 0 0.7rem 0;
        }

        h1 {
          font-size: 3rem;
          letter-spacing: -0.02em;
          line-height: 1.5;
          font-weight: 700;
        }

        h2 {
          font-size: 2.25rem;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        h3 {
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        h4 {
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        h5 {
          font-size: 1rem;
          letter-spacing: -0.01em;
          font-weight: 600;
        }

        h6 {
          font-size: 0.875rem;
          letter-spacing: -0.005em;
          font-weight: 600;
        }

        button,
        input,
        select,
        textarea {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          color: inherit;
          margin: 0;
        }

        button:focus,
        input:focus,
        select:focus,
        textarea:focus {
          outline: none;
        }

        code {
          color: ${Theme.palette.gray200};
          font-family: ${Theme.font.mono};
          font-size: 0.9em;
          white-space: pre-wrap;
        }

        code:before,
        code:after {
          content: '\`';
        }

        pre {
          padding: calc(${Theme.layout.gap.name} * 0.9) ${Theme.layout.gap.name};
          margin: ${Theme.layout.gap.name} 0;
          border: 1px solid ${Theme.palette.gray200.name};
          border-radius: ${Theme.layout.radius.name};
          font-family: ${Theme.font.mono};
          white-space: pre;
          overflow: auto;
          line-height: 1.5;
          text-align: left;
          font-size: 14px;
          -webkit-overflow-scrolling: touch;
        }

        pre code {
          color: ${Theme.palette.black.name};
          font-size: 1em;
          line-height: 1.25em;
          white-space: pre;
        }

        pre code:before,
        pre code:after {
          display: none;
        }

        pre :global(p) {
          margin: 0;
        }

        pre::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
          background: transparent;
        }

        hr {
          border-color: ${Theme.palette.gray200.name};
        }

        details {
          background-color: ${Theme.palette.gray50.name};
          border: none;
        }

        details:focus,
        details:hover,
        details:active {
          outline: none;
        }

        summary {
          cursor: pointer;
          user-select: none;
          list-style: none;
          outline: none;
        }

        summary::marker,
        summary::before,
        summary::-webkit-details-marker {
          display: none;
        }

        summary::-moz-list-bullet {
          font-size: 0;
        }

        summary:focus,
        summary:hover,
        summary:active {
          outline: none;
          list-style: none;
        }

        blockquote {
          padding: calc(0.667 * ${Theme.layout.gap.name}) ${Theme.layout.gap.name};
          color: ${Theme.palette.gray500.name};
          background-color: ${Theme.palette.gray200.name};
          border-radius: ${Theme.layout.radius.name};
          margin: 1.5em 0;
          border: 1px solid ${Theme.palette.border.name};
        }

        blockquote :global(*:first-child) {
          margin-top: 0;
        }

        blockquote :global(*:last-child) {
          margin-bottom: 0;
        }

        ::selection {
          background-color: ${Theme.palette.gray200.name};
          color: ${Theme.palette.black.name};
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
