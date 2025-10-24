import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
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
