import React from 'react';
import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      <section class="description">
        <h1 class="title-main">List of most used Æternity æpps</h1>
        <p class="description-text">
          Check to see the progress and development of æpps and Æternity
          blockchain ecosystem. List is updated daily based on the number of
          transactions in the last 24 hours.
        </p>
        <ul class="list">
          <li class="list-row">
            <span class="item-1">1.</span>
            <img
              class="item-2"
              src="https://jelly.market/static/logo-white-174143b2b447566a6eb46e19cbe10b7b.svg"
              alt="image"
            />
            <a class="item-3" href="https://jelly.market/">
              JellySwap
            </a>
            <span class="item-4">12345</span>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default Home;
