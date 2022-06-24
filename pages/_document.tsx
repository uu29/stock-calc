/* eslint-disable no-useless-catch */
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error: any) {
      throw error;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="-1" />
          <meta name="robots" content="index, follow" />
          <meta name="google" content="notranslate" />
          <link rel="icon" type="image/ico" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
          {/* <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/apple-touch-icon.png" /> */}
          {/* <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/apple-touch-icon.png" /> */}
          {/* <link rel="apple-touch-icon" type="image/png" sizes="114x114" href="/apple-touch-icon.png" /> */}
          {/* <link rel="apple-touch-icon" type="image/png" sizes="144x144" href="/apple-touch-icon.png" /> */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
