import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="">
            <Outlet />
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
