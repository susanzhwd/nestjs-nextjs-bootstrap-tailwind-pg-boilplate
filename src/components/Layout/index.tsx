import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  title: string;
  children: any;
}
export default function Layout(props: LayoutProps) {
  // const userC = userContainer.useContainer();

  const { title, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <div className="container">{children}</div>
      <Footer></Footer>
    </>
  );
}
