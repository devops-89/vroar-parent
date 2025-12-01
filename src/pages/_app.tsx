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
import "swiper/css";
import Aos from "aos";
import "aos/dist/aos.css";
import FloatingWhatsApp from "react-floating-whatsapp";
import { Box } from "@mui/material";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    Aos.init({
      delay: 500,
      mirror: true,
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Box sx={{ position: "relative", zIndex: 9999 }}>
            <FloatingWhatsApp
              phoneNumber="+18173309050"
              accountName="MyTreks.ai"
              chatMessage="Welcome to MyTreks.ai — your personalized college prep guide.
How can we help you get started today?"
            />
          </Box>
          <ToastBar />
          <Modal />
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
