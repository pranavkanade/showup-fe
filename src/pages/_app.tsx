import React from 'react';

import App from 'next/app';

import Head from '../app/head';
import Layout from '../app/layout';
import '../../static/styles/global.scss';

class ShowUpApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default ShowUpApp;
