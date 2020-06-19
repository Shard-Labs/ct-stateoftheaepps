import React from 'react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <main class="main">
        <section class="description">
          <h1 class="title-main">List of most used Æternity æpps</h1>
          <p class="description-text">
            Check to see the progress and development of æpps and Æternity
            blockchain ecosystem. List is updated daily based on the number of
            transactions in the last 24 hours.
          </p>
        </section>
      </main>
    </Layout>
  );
}
