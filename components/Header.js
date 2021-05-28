import Link from "next/link";
import { useSelector } from "react-redux";

import ItemsCountName from "./ItemsCountName";

export default function Header() {
  const count = useSelector((state) => state.cart.items.length);

  return (
    <header className="h-16 flex flex-row justify-between w-9/12 content-center">
      <Link href="/">
        <a className="text-4xl self-center m-4">lamoda</a>
      </Link>
      <div className="text-xl self-center m-4">
        <Link href="/cart">
          <a>
            <span className="float-right">Корзина</span> <br />
            <span>
              <ItemsCountName itemsCount={count} />
            </span>
          </a>
        </Link>
      </div>
    </header>
  );
}
