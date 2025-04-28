import Layout from "@/components/Layout";
import ToastBar from "@/components/ToastBar";
import store from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastBar />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
