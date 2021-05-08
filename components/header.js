import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) => state.cart.items);

  return (
    <header className="h-16 flex flex-row justify-between w-9/12 content-center">
      <Link href="/">
        <a className="text-4xl self-center m-4">lamoda</a>
      </Link>
      <div className="text-xl self-center m-4">
        <Link href="/cart">
          <a>
            Корзина <br />
            <span>{count.length} items</span>
          </a>
        </Link>
      </div>
    </header>
  );
}
