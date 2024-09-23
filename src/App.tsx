import { useEffect, useState } from "react";
import { About } from "./components/About/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Hero from "./components/Hero/Hero";
import Hireme from "./components/Hireme";
import Navbar from "./components/Navbar";
import Strategy from "./components/Strategy";
import Work from "./components/Work/Work";
import Loading from "./components/Loading";
import Decoy from "./components/Decoy";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1500);
  }, []);

  return loading ? (
    <>
      <Loading />
      <div className="w-1 h-1 flex overflow-hidden max-h-1 max-w-1">
        <Decoy />
      </div>
    </>
  ) : (
    <div className={`font-inter overflow-x-hidden`}>
      <Hireme />
      <Navbar />
      <Hero />
      <div className="px-4">
        <About />
      </div>
      <Work />
      <Strategy />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
