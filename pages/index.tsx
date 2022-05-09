/* eslint-disable */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import Link from 'Components/link';
import Page from 'Components/page';
import Container from '@mui/material/Container';
import NavigationBottom from 'Components/common/navigation-bottom';

import Routes from 'Config/routes';

const Home: NextPage = () => (
  <Page>
    <Head>
      <title>Welcome to Awesome!</title>
    </Head>
    <Container>
      <p>
        Content
        <Link href={Routes.About}>
          Go to about
        </Link>
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, hic iusto esse optio ducimus cum minus dolorum expedita odio! Ipsum ut velit inventore esse iste nemo cupiditate, aliquid doloribus deleniti!
      </p>
    </Container>
    <NavigationBottom />
  </Page>
);

export default Home;
