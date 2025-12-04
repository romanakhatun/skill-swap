import { useState } from "react";
import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import admin from "../assets/admin.png";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/all-course" },
  { name: "About us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        setIsMenuOpen(false);
      })
      .catch((err) => console.log(err.message));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const baseNavLinkClass = ({ isActive }) =>
    `font-semibold transition-colors duration-200 ${
      isActive
        ? "text-[#2C3E50] underline underline-offset-4"
        : "hover:text-[#2C3E50]/70"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ${
      isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-[#2C3E50]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className={baseNavLinkClass}>
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {user ? (
                // Desktop Profile Dropdown
                <div className="dropdown dropdown-end ml-2 hidden lg:block">
                  <label tabIndex={0} className="cursor-pointer">
                    <div
                      className="tooltip tooltip-left"
                      data-tip={user?.displayName}
                    >
                      <img
                        className="h-10 w-10 object-cover rounded-full border-2 border-blue-400 transition-all"
                        src={user?.photoURL || admin}
                        alt="User Avatar"
                      />
                    </div>
                  </label>

                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[11] menu bg-base-100 rounded-box w-52 border border-base-300 shadow-lg p-2 mt-3"
                  >
                    <li className="font-semibold text-base text-gray-600 mx-2 my-1 border-b border-base-300 pb-2">
                      My Account
                    </li>

                    <li>
                      <NavLink
                        to="/my-profile"
                        className="flex items-center gap-2 hover:text-blue-500"
                      >
                        <GoPerson size={20} className="opacity-60" /> Profile
                      </NavLink>
                    </li>

                    <li onClick={handleLogOut}>
                      <span className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-lg">
                        <FiLogOut size={20} className="opacity-60" />
                        <span className="text-red-500">Logout</span>
                      </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <li className="ml-2">
                    <NavLink to="/login" className={baseNavLinkClass}>
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className={baseNavLinkClass}>
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6 cursor-pointer" />
              ) : (
                <HiMenu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-base-100 border border-base-300 rounded-box shadow-2xl transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="p-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={mobileNavLinkClass}
              onClick={toggleMenu}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Login/Register/Logout Links */}
          <div className="pt-2 border-t border-gray-100 space-y-2">
            {user ? (
              <>
                <NavLink
                  to="/my-profile"
                  className={mobileNavLinkClass}
                  onClick={toggleMenu}
                >
                  My Profile
                </NavLink>
                <button
                  onClick={handleLogOut}
                  className="w-full text-left flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-medium text-red-500 cursor-pointer"
                >
                  <FiLogOut size={20} className="opacity-60" /> Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={mobileNavLinkClass}
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={mobileNavLinkClass}
                  onClick={toggleMenu}
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
