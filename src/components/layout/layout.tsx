import React from 'react';

import Header from 'Components/header';
import Footer from 'Components/footer';


export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
