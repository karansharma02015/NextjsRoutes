
import Head from "next/head";
import Layout from "@/Layout/layout";
import '@/assets/css/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';







export default function App({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((Layout) => Layout)

  return getLayout(<Component {...pageProps}/>)

  
}
