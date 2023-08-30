import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../index.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white flex justify-center">
      <Component {...pageProps} />
    </div>
  );
}