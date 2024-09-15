import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Home from "../pages/Home";
// import CategoryBar from "../components/CategoryBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      {/* <CategoryBar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
