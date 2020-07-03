import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import AeppList from '../components/aepp-list';

function Home() {
  const apiUrl = 'http://localhost:5000/api/dapps';
  const [aeppList, setAeppList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(apiUrl);
      const resultData = await result.json();

      const transformedData = resultData.data.map(item => {
        return {
          name: item.dapp_name,
          aeppUrl: item.website_url,
          imageSrc: item.logo,
          transactionsNumber: item.tx_count,
        };
      });
      setAeppList(transformedData);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <section className="description">
        <h1 className="title-main">List of most used Æternity æpps</h1>
        <p className="description-text">
          Check to see the progress and development of æpps and Æternity
          blockchain ecosystem. List is updated daily based on the number of
          transactions in the last 24 hours.
        </p>
        <p className="description-text-claim">
          If you want to claim your æpp contact us{' '}
          <a href="mailto:info@cryptotask.org" className="mail-to">
            info@cryptotask.org
          </a>
          .
        </p>
      </section>

      <div className="list-container">
        <ul className="list-description">
          <li className="list-description-rank">Rank</li>
          <li className="list-description-logo">logo</li>
          <li className="list-description-name">
            Top List by Transactions in last 24 hours
          </li>
          <li className="list-description-number">Number of transactions</li>
        </ul>


        <AeppList aeppList={aeppList} />
      </div>
    </Layout>
  );
}

export default Home;
