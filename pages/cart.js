import Header from "../components/header";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

export default function Cart() {
  const goods = useSelector((state) => state.cart.items);
  console.log(goods);
  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <Header />
      <main className="flex flex-col justify-center w-full sm:w-9/12">
        <div className="m-4">{goods.length} items</div>
        <div>
          {goods.map((item) => (
            <div key={item.payload.id} className="flex items-center w-full sm:m-4 sm:p-4 border-2 sm:border-8">
              <div className="flex w-1/5 justify-center p-1">
                <img src={item.payload.img} alt="" />
              </div>
              <div className="flex w-1/5 justify-center p-1">{item.payload.name}</div>
              <div className="flex w-1/5 justify-center p-1">
                <button>-</button> 1 <button>+</button>
              </div>
              <div className="flex w-1/5 justify-center p-1">{item.payload.price} ₽</div>
              <div className="flex w-1/5 justify-center p-1">Удалить</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
