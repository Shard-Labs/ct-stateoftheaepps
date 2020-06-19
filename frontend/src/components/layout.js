import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/styles.scss';

function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
