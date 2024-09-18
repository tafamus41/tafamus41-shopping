import React from "react";
import FilledBasketTotal from "./FilledBasketTotal";
import EmptyBasketTotal from "./EmptyBasketTotal";

const BasketCard = ({ counter, basketLoad }) => {
  return <div>{counter ? <FilledBasketTotal /> : <EmptyBasketTotal />}</div>;
};

export default BasketCard;
