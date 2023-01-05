import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='shortcut icon' href='/favicon.png' type='image/png' />
                    <link rel="apple-touch-icon" href="/logo192.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="manifest" href="/manifest.json" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
