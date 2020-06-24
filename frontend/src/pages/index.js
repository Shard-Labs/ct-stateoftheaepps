import React from 'react';
import Layout from '../components/layout';

function Home() {
  return (
    <Layout>
      <section class="description">
        <h1 class="titleMain">List of most used Æternity æpps</h1>
        <p class="descriptionText">
          Check to see the progress and development of æpps and Æternity
          blockchain ecosystem. List is updated daily based on the number of
          transactions in the last 24 hours.
        </p>
        <p class="descriptionText">
          If you want to clain your æpp contact us info@cryptotask.org.
        </p>
      </section>

      <ul class="list">
        <li class="listRow">
          <span class="rank">1.</span>
          <img
            class="appLogo"
            src="https://jelly.market/static/logo-white-174143b2b447566a6eb46e19cbe10b7b.svg"
            alt="aepp logo"
          />
          <a class="appName" href="https://jelly.market/" target="_blank">
            JellySwap
          </a>

          <span class="transactionsNumber">12345</span>
        </li>
      </ul>
    </Layout>
  );
}

export default Home;
