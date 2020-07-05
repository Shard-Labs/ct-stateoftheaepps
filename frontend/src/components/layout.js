import React from 'react';
import Header from './Header';
import Footer from './Footer';

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
