import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout'
import WineList from './components/Products/WineList';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Layout>
          <Hero />
          <WineList />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
