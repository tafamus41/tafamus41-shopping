import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
import BasketCard from "../components/BasketCard";

const AppRouter = () => {
  const [counter, setCounter] = useState(0);
  const [basketLoad, setBasketLoad] = useState([]);
  const [basketShow, setBasketShow] = useState(false);
 
  const basket = (item) => {
    setCounter(counter + 1);
    setBasketLoad([...basketLoad,item]);
  };
  const renderBasket = () => setBasketShow(!basketShow);

  return (
    <BrowserRouter>
      <MyNavbar counter={counter} renderBasket={renderBasket} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            basketShow ? (
              <BasketCard basketLoad={basketLoad} counter={counter}/>
            ) : (
              <Home basket={basket} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
