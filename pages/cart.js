import Header from "../components/header";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

export default function Cart() {
  const goods = useSelector((state) => state.cart.items);

  const cartItems = [];
  const duplicateItems = [];

  for (let i = 0; i < goods.length; i++) {
    cartItems.push(goods[i].payload);
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

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <Header />
      <main className="flex flex-col justify-center w-full sm:w-9/12">
        <div className="m-4">{goods.length} items</div>
        <div>
          {filteredItems.map((item) => (
            <div
              key={item[0].id}
              className="flex items-center w-full sm:m-4 sm:p-4 border-2 sm:border-8"
            >
              <div className="flex w-1/5 justify-center p-1">
                <img src={item[0].img} alt="" />
              </div>
              <div className="flex w-1/5 justify-center p-1">{item[0].name}</div>
              <div className="flex w-1/5 justify-center p-1">
                <button className="sm:px-4 px-1" onClick={() => console.log("- item")}>
                  -
                </button>
                <div className="sm:px-4 px-1">{item[1]}</div>
                <button className="sm:px-4 px-1" onClick={() => console.log("+ item")}>
                  +
                </button>
              </div>
              <div className="flex w-1/5 justify-center p-1">{item[0].price} ₽</div>
              <div className="flex w-1/5 justify-center p-1">
                <button className="sm:px-4 px-1" onClick={() => console.log("delete item")}>
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
