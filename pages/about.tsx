import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Page from 'Components/page';
import Link from 'Components/link';


const About: NextPage = () => (
  <Page>
    <Head>
      <title>About!</title>
    </Head>

    About
    <Link
      href="/"
      color="secondary"
    >
      Go to home
    </Link>
  </Page>
);

export default About;
