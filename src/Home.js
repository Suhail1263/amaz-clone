import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
    <img className="home__image" 
    src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61aURrton0L._SX3000_.jpg" 
    alt="" />
    {/* product id ,title,price,rating,image*/}
    <div className="home__row">
    <Product 
      id="122343"
      title="Fire-Boltt Ninja Call Pro 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67"
      price={1799}
      rating={5}
      image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61S9aVnRZDL._AC_UL600_FMwebp_QL65_.jpg"
     />
     <Product 
      id="122346"
      title="MuscleBlaze Beginner's Whey Protein (Chocolate, 1 kg / 2.2 lb) No Added Sugar, Faster Muscle Recovery & Improved Strength"
      price={1349}
      rating={4}
      image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61kakn7F+rL._AC_UL600_FMwebp_QL65_.jpg"
     />
    </div>
    <div className="home__row">
    <Product 
      id="122343"
      title="ASUS TUF Gaming A15, 15.6(39.62 cms) FHD 144Hz, AMD Ryzen 5 4600H,4GB GeForce GTX 1650 Laptop(8GB/512GB SSD/Win11/Black/2.3 Kg),FA506IHRZ-HN111W,5% Instant Off on APay ICICI CreditCard (Prime only)"
      price={49990}
      rating={4}
      image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91zVSkGGZbS._SX466_.jpg"
     />
     <Product 
      id="122343"
      title="Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt (Karrey)"
      price={350}
      rating={5}
      image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71dInK15s1L._AC_UL600_FMwebp_QL65_.jpg"
     />
        </div>
        <div className="home__row">
        <Product 
      id="122343"
      title="Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White, GLS18I3FWAMC)"
      price={32799}
      rating={5}
      image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31UISB90sYL._AC_UL480_QL65_.jpg"
     />
        </div>
    {/* Product*/}
    </div>
  );
}

export default Home
