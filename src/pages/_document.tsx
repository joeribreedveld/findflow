// Imports
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
} from "next/document";

// Functions
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Exports
export default MyDocument;
