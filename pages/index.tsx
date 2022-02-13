import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Link from 'Components/link';

import Routes from 'Config/routes';


const Home: NextPage = () => (
  <>
    <Head>
      <title>Welcome to Awesome!</title>
    </Head>
    <p>
      Content
      <Link href={Routes.About}>
        Go to about
      </Link>
    </p>
  </>
);

export default Home;
