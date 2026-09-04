import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../redux/store/store";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}