import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, reduceFromCart, removeFromCart } from "../redux/cartSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div key={item[0].id} className="flex items-center w-full sm:m-4 sm:p-4 border-2 sm:border-8">
      <div className="flex w-1/5 justify-center p-1">
        <img src={item[0].img} alt="" />
      </div>
      <div className="flex w-1/5 justify-center p-1">{item[0].name}</div>
      <div className="flex w-1/5 justify-center p-1">
        <button
          className="sm:px-4 px-1"
          onClick={() => dispatch(reduceFromCart([item[0], item[1]]))}
        >
          -
        </button>
        <div className="sm:px-4 px-1">{item[1]}</div>
        <button className="sm:px-4 px-1" onClick={() => dispatch(addToCart(item[0]))}>
          +
        </button>
      </div>
      <div className="flex w-1/5 justify-center p-1">{item[0].price * item[1]} ₽</div>
      <div className="flex w-1/5 justify-center p-1">
        <button className="sm:px-4 px-1" onClick={() => dispatch(removeFromCart(item[0]))}>
          Удалить
        </button>
      </div>
    </div>
  );
};

export default Item;
