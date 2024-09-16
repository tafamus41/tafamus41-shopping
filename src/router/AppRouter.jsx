import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
import BasketCard from "../components/BasketCard";
// import CategoryBar from "../components/CategoryBar";

const AppRouter = () => {
  const [counter, setCounter] = useState(0)
  const [basketLoad,setBasketLoad]=useState([])
  // console.log(basketLoad);
  const basket = (item)=>{
    setCounter(counter+1)
    setBasketLoad(item)
  }

  // const renderBasket=()=>{

  // }
  return (
    <BrowserRouter>
      <MyNavbar counter={counter} />
      {/* <CategoryBar/> */}
      <Routes>
        <Route exact path="/" element={<Home basket={basket}/>}/>
        <Route path="/" element={<BasketCard basketLoad={basketLoad}/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
