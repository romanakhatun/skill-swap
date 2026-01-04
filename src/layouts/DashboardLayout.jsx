import { NavLink, Outlet } from "react-router";
import { RiMenu2Line } from "react-icons/ri";
import { MdDashboard, MdOutlineAddBox, MdBook, MdLogout } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import Logo from "../components/Logo";

const DashboardLayout = () => {
  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <MdDashboard size={20} /> },
    { name: "My Courses", path: "my-courses", icon: <MdBook size={20} /> },
    {
      name: "Add Course",
      path: "add-course",
      icon: <MdOutlineAddBox size={20} />,
    },
    { name: "Profile", path: "profile", icon: <FaUserCircle size={20} /> },
  ];

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Top Navbar */}
        <header className="navbar bg-base-100 border-b border-base-300 px-4">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-ghost btn-square lg:hidden"
            aria-label="Open sidebar"
          >
            <RiMenu2Line size={22} />
          </label>

          <div className="flex-1">
            <Logo />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 bg-base-200 p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      <aside className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <div className="w-64 bg-base-100 flex flex-col min-h-full">
          {/* Sidebar Header */}
          <div className="px-6 py-4 border-b text-lg font-bold">Dashboard</div>

          <ul className="menu px-3 py-4 space-y-1 flex-1">
            {menu.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition
                    ${
                      isActive
                        ? "bg-primary text-primary-content"
                        : "hover:bg-base-200"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DashboardLayout;
