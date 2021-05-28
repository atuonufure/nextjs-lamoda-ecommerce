import { useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Item from "../components/Item";
import ItemsCountName from "../components/ItemsCountName";

export default function Cart() {
  const goods = useSelector((state) => state.cart.items);

  const cartItems = [];
  const duplicateItems = [];

  for (let i = 0; i < goods.length; i++) {
    cartItems.push(goods[i]);
  }

  for (let i = 0; i < cartItems.length; i++) {
    if (!duplicateItems.includes(cartItems[i])) {
      duplicateItems.push(cartItems[i]);
    }
  }

  const filteredItems = duplicateItems.map((item) => [item, 0]);

  for (let i = 0; i < cartItems.length; i++) {
    filteredItems.forEach((item) => {
      if (item[0].id === cartItems[i].id) {
        item[1] += 1;
      }
    });
  }

  let totalPrice = 0;

  filteredItems.forEach((item) => {
    totalPrice += item[1] * item[0].price;
  });

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <Header />
      <main className="flex flex-col justify-center w-full sm:w-9/12">
        <div>
          {filteredItems.map((item) => (
            <Item item={item} />
          ))}
        </div>
        <div className="m-4 justify-center">
          Итого: <ItemsCountName itemsCount={goods.length} />, общей стоимостью {totalPrice} ₽
        </div>
      </main>
      <Footer />
    </div>
  );
}
