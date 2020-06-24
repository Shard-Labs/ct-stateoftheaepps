import React from 'react';
import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      <section className="description">
        <h1 className="title-main">List of most used Æternity æpps</h1>
        <p className="description-text">
          Check to see the progress and development of æpps and Æternity
          blockchain ecosystem. List is updated daily based on the number of
          transactions in the last 24 hours.
        </p>
        <p className="description-text">
          If you want to claim your æpp contact us info@cryptotask.org.
        </p>
      </section>

      <ul className="list">
        <li className="list-row">
          <span className="rank">1.</span>
          <img
            className="app-logo"
            src="https://jelly.market/static/logo-white-174143b2b447566a6eb46e19cbe10b7b.svg"
            alt="aepp logo"
          />
          <a className="app-name" href="https://jelly.market/" target="_blank">
            JellySwap
          </a>

          <span className="transactions-number">12345</span>
        </li>
      </ul>
    </Layout>
  );
}

export default Home;
