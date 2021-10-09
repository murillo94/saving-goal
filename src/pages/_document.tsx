import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText, theme } from 'theme/stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                body {
                  -webkit-font-smoothing: antialiased;
	                -moz-osx-font-smoothing: grayscale;
                  background-color: ${theme.colors.blueGray10};
                  margin: 0;
                }

                *, :after, :before {
                  box-sizing: border-box;
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
