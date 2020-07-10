import React from 'react';
import Header from './header';
import Footer from './footer';
import { Helmet } from 'react-helmet';

import '../../styles/styles.scss';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Helmet>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
