import Head from 'next/head';

const Meta = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* <link rel="shortcut icon" href="/static/favicon.png" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Jomolhari&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>Brewbean</title>
    </Head>    
);

export default Meta;