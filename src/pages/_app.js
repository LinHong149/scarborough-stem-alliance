import Navbar from "@/components/Navbar";
import '../global.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
