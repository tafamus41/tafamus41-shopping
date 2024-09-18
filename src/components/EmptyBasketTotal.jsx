import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyBasketTotal = () => {
    const navigate=useNavigate()
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <h1 className="text-success">Your basket is already empty</h1>
      <h1 className="text-danger">Do you wanna go back and choose something</h1>
      <button onClick={()=>navigate("/")}>GO BACK</button>
    </div>
  );
};

export default EmptyBasketTotal;
