import { UserController } from "@/assets/api/UserController";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ToastBar from "@/components/ToastBar";
import { setUserDetails } from "@/redux/reducers/User";
import { persistor, store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <ToastBar />
          <Modal />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
