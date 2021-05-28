import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-center flex-wrap w-9/12">
      made by 🔥
      <Link href="https://github.com/atuonufure">
        <a className="cursor-pointer">atuonufure</a>
      </Link>
    </footer>
  );
}
