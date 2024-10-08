import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from '@/app/redux/Store/store';
import "./global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" />
       <noscript>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" />
      </noscript>
        <title>OSP</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
     
      <Component {...pageProps} />
      
     
    </Provider>
    </Fragment>
  );
}

export default MyApp;
