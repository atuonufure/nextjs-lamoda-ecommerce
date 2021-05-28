import React from "react";

const ItemsCountName = ({ itemsCount }) => {
  let count = +String(itemsCount)[String(itemsCount).length - 1];
  
  switch (true) {
    case count === 1:
      return <>{itemsCount} товар</>;
    case count > 1 && count <= 4:
      return <>{itemsCount} товара</>;
    default:
      return <>{itemsCount} товаров</>;
  }
};

export default ItemsCountName;
