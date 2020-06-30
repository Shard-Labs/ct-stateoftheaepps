import React from 'react';
import Layout from '../components/layout';
import AeppList from '../components/aepp-list';

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
          If you want to claim your æpp contact us{' '}
          <a href="mailto:info@cryptotask.org" className="mail-to">
            info@cryptotask.org
          </a>
          .
        </p>
        <ul className="list-description">
          <li>Rank</li>
          <li className="list-description-name">
            Top List by Transactions in last 24 hours
          </li>
          <li>Number of transactions</li>
        </ul>
      </section>
      <AeppList />
    </Layout>
  );
}

export default Home;
