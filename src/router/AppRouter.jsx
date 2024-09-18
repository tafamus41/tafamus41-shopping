import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
import BasketCard from "../components/BasketCard";
// import CategoryBar from "../components/CategoryBar";

const AppRouter = () => {
  const [counter, setCounter] = useState(0);
  const [basketLoad, setBasketLoad] = useState([]);
  const [basketShow, setBasketShow] = useState(false);
  // console.log(basketLoad);
  const basket = (item) => {
    setCounter(counter + 1);
    setBasketLoad(item);
  };
  const renderBasket = () => setBasketShow(!basketShow);

  return (
    <BrowserRouter>
      <MyNavbar counter={counter} renderBasket={renderBasket} />
      {/* <CategoryBar/> */}
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
        {/* <Route path="/" element={ }/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
