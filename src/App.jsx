import React from "react";
import Navbar from "./components/NavBar/Navbar";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
// import WineList from './components/Products/WineList';
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HeroSlider />
      <Layout>{/* <WineList /> */}</Layout>
      <Footer />
    </>
  );
}

export default App;
