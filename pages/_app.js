import "../styles/index.css";
import "tailwindcss/tailwind.css";
import data from "../public/db.json";

import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} data={data} />
    </Provider>
  );
}

export default MyApp;
