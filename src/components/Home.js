import React from "react";
import "../styles/Home.css";
import Banner from "../assets/Banner.png";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={Banner} alt="banner" />

        <div className="home-row">
          <Product
            id="123"
            title="HTML and CSS: Design and Build Websites Paperback – Illustrated, 18 Nov. 2011"
            price={22.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX395_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="234"
            title="Whiskas 1+ Cat Pouches Mixed Selection In Jelly 84x 100g"
            price={26.07}
            image="https://m.media-amazon.com/images/I/81Xoor6amtL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="345"
            title="
            Hbada Ergonomic Desk Chair, Computer Office Chair with Flip-up Armrest&Lumbar Support, Adjustable Height, Black"
            price={159.99}
            image="https://m.media-amazon.com/images/I/712L1C9RS9L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id="456"
            title="
            AstroAI Car Fridge 22 Litre, Compressor Refrigerator for Truck, RV, Boat, Camping and Travel"
            price={195.49}
            image="https://m.media-amazon.com/images/I/714OmCDfsES._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="567"
            title="
            Fresh Grills Kamado Charcoal BBQ Grill | Ceramic Barbecue Grill, Oven and Smoker with Stand"
            price={899.99}
            image="https://m.media-amazon.com/images/I/71j9M4pOXRS._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="678"
            title="OneOdio Wired Over Ear Headphones Hi-Fi Sound & Bass Boosted headphone with 50mm Neodymium Drivers"
            price={34.99}
            image="https://m.media-amazon.com/images/I/81Zo3J+MpVL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="789"
            title="JVC Fire TV 40 Smart Full HD LED TV"
            price={329.99}
            image="https://m.media-amazon.com/images/I/61sSAuEPVPL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
