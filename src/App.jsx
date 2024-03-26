import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Panier from "./components/Panier";

const App = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--dx5qb8qmqmcb.code.run/"
    );
    console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <Header data={data} />
      <div className="content">
        <div className="container">
          <div className="menu">
            <Menus data={data} />
          </div>
          <Panier />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
