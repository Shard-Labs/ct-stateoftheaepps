import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import AeppList from '../components/Aepp-list';

function Home() {
  const apiUrl = 'http://localhost:5000/api/dapps';
  const [aeppList, setAeppList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

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
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <section className="section-description">
        <h1 className="section-title-main">List of most used Æternity æpps</h1>
        <p className="section-description-text">
          Check to see the progress and development of æpps and Æternity
          blockchain ecosystem. List is updated daily based on the number of
          transactions in the last 24 hours.
        </p>
        <p className="section-description-text-claim">
          If you want to claim your æpp contact us{' '}
          <a href="mailto:info@cryptotask.org" className="mail-to">
            info@cryptotask.org
          </a>
          .
        </p>
      </section>

      <div className="aepp-list-container">
        <ul className="aepp-list-header">
          <li className="rank">Rank</li>
          <li className="logo">logo</li>
          <li className="aepp-name">
            Top List by Transactions in last 24 hours
          </li>
          <li className="transaction-number">Number of transactions</li>
        </ul>


        <AeppList aeppList={aeppList} isLoading={isLoading} />
      </div>
    </Layout>
  );
}

export default Home;
