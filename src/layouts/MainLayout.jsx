import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MainLayout = () => {
  const { state } = useNavigation();
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // run only once
      easing: "ease-in-out",
      offset: 120, // how far before it starts animating
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>{state == "loading" ? <Loading /> : <Outlet />}</main>

      <div className="mt-15">
        <div className="flex-grow h-px bg-base-300"></div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
