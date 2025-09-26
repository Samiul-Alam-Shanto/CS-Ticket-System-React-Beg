import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Management from "./components/Management/Management";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading/Loading";

const DataFetch = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = DataFetch();

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Management dataPromise={dataPromise} />
      </Suspense>

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
