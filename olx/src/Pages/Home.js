import React from "react";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Cards/Card";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";
import SubHeader from "../Components/Sub Header/SubHeader";

function Home() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Banner />
      <main className="container-2">
        <Slider />
        <div className="products">
          <h2 className="category">Fresh recommendations</h2>
          <div className="products_items">
            <Card />
          </div>
          <button className="load-btn">Load More</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
