import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import "./index.css";

export default function App() {
  return (
    <div className="wrapper wrapper-app">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}
