import Head from 'next/head'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import { CssBaseline, NapolkeProvider, Image } from '@napolke-ui'
import useDomClean from '../lib/use-dom-clean'
import ConfigContext from '../lib/config-provider'
import { MDXProvider } from '@mdx-js/react'
import {
  HybridCode,
  HybridLink,
  HybridLinkHeading
} from '../src/components/MdxWidgets'
import { KBarProvider } from 'kbar'
import Navigation from '../src/components/Navigation/navigation'
import { Theme } from '@core/themes/presets'

const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  useDomClean()

  return (
    <>
      <Head>
        <title>
          Napolke UI - Современная и минималистичная UI библиотека для React
        </title>
        <meta name="google" content="notranslate" />
        <meta property="og:title" content="Napolke UI" />
        <meta property="og:site_name" content="Napolke UI" />
        <meta name="generator" content="Napolke UI" />
      </Head>
      <NapolkeProvider>
        <CssBaseline />
        <ConfigContext>
          {/*  <Search />*/}
          <KBarProvider>
            <Navigation />
            <MDXProvider
              components={{
                h3: HybridLinkHeading,
                a: HybridLink,
                img: Image,
                pre: HybridCode
              }}
            >
              <
                Component {...pageProps} />
            </MDXProvider>
          </KBarProvider>
        </ConfigContext>
        <style global jsx>{`
          :root {
            --nui-page-nav-height: 64px;
            --nui-page-scrollbar-width: 4px;
          }

          pre {
            background-color: rgb(54, 52, 80);
          }

          pre code {
            color: #ffffff;
          }

          .tag {
            color: ${Theme.palette.error.name};
          }

          .punctuation {
            color: #ffffff;
          }

          .attr-name {
            color: ${Theme.palette.warning.name};
          }

          .attr-value {
            color: ${Theme.palette.error.name};
          }

          .language-javascript {
            color: ${Theme.palette.gray400.name};
          }

          .method.function.property-access {
            color: ${Theme.palette.primary.name};
          }

          .property-access {
            color: #ffffff;
          }

          .literal-property.property {
            color: #ffffff;
          }

          .function {
            color: ${Theme.palette.primary.name};
          }

          .parameter {
            color: #ffffff;
          }

          span.class-name {
            color: ${Theme.palette.warning.name};
          }

          span.maybe-class-name {
            color: #ffffff;
          }

          span.token.string {
            color: ${Theme.palette.success.name};
          }

          span.token.comment {
            color: ${Theme.palette.gray300.name};
          }

          span.operator {
            color: #ffffff;
          }

          span.constant {
            color: #ffffff;
          }

          span.number {
            color: #ffffff;
          }

          span.keyword {
            color: ${Theme.palette.success.name};
          }

          span.plain-text {
            color: #ffffff;
          }
        `}</style>
      </NapolkeProvider>
    </>
  )
}

export default Application

// {/*  .tag {*/}
// {/*    color: ${theme.palette.accents_5};*/}
// {/*  }*/}
// {/*  .punctuation {*/}
// {/*    color: ${theme.palette.accents_5};*/}
// {/*  }*/}
// {/*  .attr-name {*/}
// {/*    color: ${theme.palette.accents_6};*/}
// {/*  }*/}
// {/*  .attr-value {*/}
// {/*    color: ${theme.palette.accents_4};*/}
// {/*  }*/}
// {/*  .language-javascript {*/}
// {/*    color: ${theme.palette.accents_4};*/}
// {/*  }*/}
// {/*  span.class-name {*/}
// {/*    color: ${theme.palette.warning};*/}
// {/*  }*/}
// {/*  span.maybe-class-name {*/}
// {/*    color: ${theme.palette.purple};*/}
// {/*  }*/}
// {/*  span.token.string {*/}
// {/*    color: ${theme.palette.accents_5};*/}
// {/*  }*/}
// {/*  span.token.comment {*/}
// {/*    color: ${theme.palette.accents_3};*/}
// {/*  }*/}
// {/*  span.keyword {*/}
// {/*    color: ${theme.palette.success};*/}
// {/*  }*/}
// {/*  span.plain-text {*/}
// {/*    color: ${theme.palette.accents_3};*/}
// {/*  }*/}
// {/*  body::-webkit-scrollbar {*/}
// {/*    width: var(--nui-page-scrollbar-width);*/}
// {/*    background-color: ${theme.palette.accents_1};*/}
// {/*  }*/}
// {/*  body::-webkit-scrollbar-thumb {*/}
// {/*    background-color: ${theme.palette.accents_2};*/}
// {/*    border-radius: ${theme.layout.radius};*/}
// {/*  }*/}
