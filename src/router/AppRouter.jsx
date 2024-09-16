import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
// import CategoryBar from "../components/CategoryBar";

const AppRouter = () => {
  const [counter, setCounter] = useState(0)
  const basket = ()=>setCounter(counter+1)
  return (
    <BrowserRouter>
      <MyNavbar counter={counter}/>
      {/* <CategoryBar/> */}
      <Routes>
        <Route exact path="/" element={<Home basket={basket}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
