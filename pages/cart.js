import Header from "../components/header";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

export default function Cart() {
  const goods = useSelector((state) => state.cart.items);
  console.log(goods);
  return (
    <div className="flex flex-wrap justify-center w-screen">
      <Header />
      <main className="flex flex-col flex-wrap justify-center w-9/12">
        <div className="m-4">{goods.length} items</div>
        <div>
          {goods.map((item) => (
            <div
              key={item.payload.id}
              className="flex flex-wrap justify-between w-full m-4 p-4 border-8 items-center"
            >
              <div className="flex w-1/5 ">
                <img src={item.payload.img} alt="" />
              </div>
              <div className="flex w-1/5 ">{item.payload.name}</div>
              <div className="flex w-1/5 ">
                <button>-</button> 1 <button>+</button>
              </div>
              <div className="flex w-1/5 ">{item.payload.price} ₽</div>
              <div className="flex w-1/5 ">Удалить</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
