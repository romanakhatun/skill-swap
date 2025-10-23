import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>

      <div className="mt-15">
        <div className="flex-grow h-px bg-gray-300"></div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
