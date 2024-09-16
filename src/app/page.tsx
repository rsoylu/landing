import React from "react";
import Navbar from "./components/navigation";
import Hero from "./components/hero";
import Shop from "./components/shop";
import Footer from "./components/footer";
import Reviews from "./components/reviews";
import Plans from "./components/plans";
import ContactUs from "./components/contactus";

const Layout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Shop />
      <Plans />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Layout;
