import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import logo from "../assets/logo.png";
import { FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import admin from "../assets/admin.png";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <img className="w-[30px]" src={logo} alt="SkillSwap Logo" />
        <h1 className="text-[#2d447a] font-bold text-2xl pt-1">
          Ski<span className="text-[#178790]">ll</span>
          <span className="text-[#e79c4e]">Swap</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-4 text-[#2C3E50] font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>

          {user ? (
            <>
              {/* Profile Dropdown */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <div
                    className="tooltip tooltip-left"
                    data-tip={user?.displayName}
                  >
                    <img
                      className="h-[40px] w-[40px] object-cover rounded-full border-2 border-blue-400  transition-all"
                      src={user?.photoURL || admin}
                      alt="User Avatar"
                    />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[11] menu bg-base-100 rounded-box w-52 border border-base-300"
                >
                  <li className="font-semibold text-[17px] text-gray-600 mb-2 border-b border-base-300 pb-2">
                    My Account
                  </li>

                  <li>
                    <NavLink
                      to="/my-profile"
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <GoPerson size={20} className="opacity-60" /> Profile
                    </NavLink>
                  </li>

                  <li onClick={handleLogOut}>
                    <span>
                      <FiLogOut size={20} className="opacity-60" />
                      <span className="text-red-500">Logout</span>
                    </span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? "underline" : "")}
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
