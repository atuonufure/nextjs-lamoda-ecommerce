import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 flex flex-row justify-between w-9/12 content-center">
      <Link href="/">
        <a className="text-4xl self-center m-4">lamoda</a>
      </Link>
      <Link href="/cart">
        <a className="text-xl self-center m-4">Корзина</a>
      </Link>
    </header>
  );
}
