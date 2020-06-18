import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/styles.scss";

export default function Home() {
  return (
    <div>
      <Header />

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

      <Footer />
    </div>
  );
}
