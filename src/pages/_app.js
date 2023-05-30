import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import '../index.css'

// export default function App({ Component, pageProps }) {
//   return (
//     <div className="bg-white flex justify-center">
//       <Navbar />
//       <Component {...pageProps} />
//     </div>
//   );
// }

function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.pathname.startsWith('/scarborough-stem-alliance') &&
      router.replace(router.pathname.replace('/scarborough-stem-alliance', ''));
  }, []);

  return (
    <div className="bg-white flex justify-center">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;