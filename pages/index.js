import Header from "../components/header";
import Footer from "../components/footer";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function Home({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <Header />
      <main className="flex flex-row flex-wrap w-9/12">
        {data.map((el) => (
          <div key={el.id} className="flex flex-row justify-center flex-wrap lg:w-4/12 my-4">
            <div className="text-xl self-center">{el.name}</div>
            <img className="w-11/12" src={el.img} alt="" />
            <div className="flex justify-between w-11/12 my-2">
              <div className="text-xl self-center">{el.price} ₽</div>
              <button
                className="bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-500 h-auto p-2 rounded-xl text-white"
                onClick={() => {
                  dispatch(addToCart(el));
                }}
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
