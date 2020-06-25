import React from 'react';
import Header from './header';
import Footer from './footer';

import '../styles/styles.scss';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
