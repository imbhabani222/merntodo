import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div><Table/></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
