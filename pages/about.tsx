import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Link from 'Components/link';


const About: NextPage = () => (
  <>
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
  </>
);

export default About;
