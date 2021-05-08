import Header from "../components/header";
import Footer from "../components/footer";  

export default function Cart() {
  return (
    <div className="flex flex-wrap justify-center w-screen">
      <Header />
      <main className="flex flex-row flex-wrap w-9/12">
        Cart
      </main>
      <Footer />
    </div>
  );
}
