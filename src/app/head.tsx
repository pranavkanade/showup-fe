import React from 'react';

import Head from 'next/head';

const AppHead = () => {
  return (
    <Head>
      <title>Show Up!</title>
      <link rel="stylesheet" href="/static/styles/antd.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Heebo|Noto+Sans+SC|Nunito+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default AppHead;
