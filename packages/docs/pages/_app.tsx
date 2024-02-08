import Head from 'next/head'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import React from 'react'
import { CssBaseline, NapolkeProvider, Image } from '@napolke-ui'
import useDomClean from 'lib/use-dom-clean'
import ConfigContext from "../lib/config-provider";
import {MDXProvider} from "@mdx-js/react";
import {HybridLink} from "../сomponents/mdx-widgets";
import {KBarProvider} from "kbar";
import Navigation from "../src/components/Navigation/navigation";


const Application: NextPage<AppProps<{}>> = ({ Component, pageProps }) => {
  useDomClean()

  return (
    <>
      <Head>
        <title>Napolke UI - Современная и минималистичная UI библиотека для React</title>
        <meta name="google" content="notranslate" />
        <meta property="og:title" content="Napolke UI" />
        <meta property="og:site_name" content="Napolke UI" />
        <meta name="generator" content="Napolke UI" />
         <link
            rel="manifest"
            href="../src/data/manifest.json"
            crossOrigin="use-credentials"
         />
      </Head>
      <NapolkeProvider>
        <CssBaseline />
        <ConfigContext>
        {/*  <Search />*/}
           <KBarProvider>
              <Navigation/>
          <MDXProvider
            components={{
               a: HybridLink,
              img: Image,
            }}>
            <Component {...pageProps} />
          </MDXProvider>
           </KBarProvider>
        </ConfigContext>
        <style global jsx>{`
     
          :root {
            --nui-page-nav-height: 64px;
            --nui-page-scrollbar-width: 4px;
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
// {/*    width: var(--geist-page-scrollbar-width);*/}
// {/*    background-color: ${theme.palette.accents_1};*/}
// {/*  }*/}
// {/*  body::-webkit-scrollbar-thumb {*/}
// {/*    background-color: ${theme.palette.accents_2};*/}
// {/*    border-radius: ${theme.layout.radius};*/}
// {/*  }*/}