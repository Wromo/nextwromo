import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME =
  'NextWromo - Next Wromo Studio eCommerce app Marketplace';
const APP_DESCRIPTION =
  'This is Next Wromo Studio eCommerce app Marketplace';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta
            property="og:title"
            content="NextWromo - Next Wromo Studio eCommerce app Marketplace"
          />
          <meta property="og:type" content="eCommerce Website" />
          <meta
            property="og:url"
            content="https://wromo.de:3000/"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/ahossain/image/upload/v1636729752/facebook-page_j7alju.png"
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

export default MyDocument;
