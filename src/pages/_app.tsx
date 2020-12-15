import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ReactModal from 'react-modal';
import { GlobalStyles } from 'twin.macro';
import userContainer from '../containers/user';
import '../styles/bootstrap.scss';
import '../styles/tailwind.scss';

ReactModal.setAppElement('#__next');

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalStyles />
      <userContainer.Provider>
        <Component {...pageProps} />
      </userContainer.Provider>
    </>
  );
}
