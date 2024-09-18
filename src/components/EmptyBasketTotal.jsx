import React from "react";


const EmptyBasketTotal = () => {
 
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <h1 className="text-success">Your basket is already empty</h1>
      <h3 className="text-danger">If you wanna go back and choose something please just push the basket button top-right corner</h3>
     
    </div>
  );
};

export default EmptyBasketTotal;
