import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '../../core/components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(){
              if (typeof document === 'undefined') return;
              
              let value;
              if (typeof document !== 'undefined') {
                const cookies = document.cookie.split(';');
                const filteredCookies = cookies.filter(cookie => cookie.indexOf('theme=') >= 0);

                if (filteredCookies.length) {
                   value =
                      filteredCookies[0].substring(
                         filteredCookies[0].indexOf('true'),
                         filteredCookies[0].length
                      ) === 'dark'
                         ? 'dark'
                         : 'light';
                }
              }
              if (value === 'dark') {
                document.documentElement.style.background = '#000';
                document.body.style.background = '#000';
              };
            })()
          `,
            }}
          />
          <Main />
          <NextScript />
          {/*<script*/}
          {/*  async*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: `*/}
          {/*    window.dataLayer = window.dataLayer || [];*/}
          {/*    function gtag(){dataLayer.push(arguments);}*/}
          {/*    gtag('js', new Date());*/}
          {/*    gtag('config', 'UA-110371817-12');*/}
          {/*    `,*/}
          {/*  }}*/}
          {/*/>*/}
        </body>
      </Html>
    )
  }
}

export default MyDocument
