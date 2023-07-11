import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import '../index.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white flex justify-center z-100">
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}