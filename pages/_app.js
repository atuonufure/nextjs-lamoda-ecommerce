import "../styles/index.css";
import "tailwindcss/tailwind.css";
import data from "../public/db.json";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} data={data} />;
}

export default MyApp;
