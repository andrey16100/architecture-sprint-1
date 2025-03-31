import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';

function Main() {
  return (
    <div className="main">
      <Header />
      <main>
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default Main;