import Navbar from "@/components/Navbar";
import '../index.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white flex justify-center">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
