import Header from '../components/header';
import Footer from '../components/footer';

export default function Home({ data }) {
  return (
    <div className="flex flex-wrap justify-center w-screen">
      <Header />
      <main className="flex flex-row flex-wrap w-9/12">
        {data.map((el) => (
          <div className="flex flex-row justify-center flex-wrap lg:w-4/12 my-4">
            <div className="text-xl self-center">{el.name}</div>
            <img className="w-11/12" src={el.img} alt="" />
            <div className="flex justify-between w-11/12 my-2">
              <div className="text-xl self-center">{el.price} ₽</div>
              <button className="bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 active:bg-blue-500 h-auto p-2 rounded-xl text-white">Добавить в корзину</button>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
