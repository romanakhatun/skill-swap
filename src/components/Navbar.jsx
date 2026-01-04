import { useState } from "react";
import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { FiHome, FiLogOut } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import admin from "../assets/admin.png";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

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
      .then(() => setIsMenuOpen(false))
      .catch((err) => console.log(err.message));
  };

  const baseNavLinkClass = ({ isActive }) =>
    `font-semibold transition-colors duration-200 ${
      isActive
        ? "text-primary underline underline-offset-4"
        : "text-base-content/80 hover:text-primary"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-200 ${
      isActive
        ? "bg-primary text-primary-content"
        : "text-base-content hover:bg-base-200"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-5">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className={baseNavLinkClass}>
                    {link.name}
                  </NavLink>
                </li>
              ))}

              {user ? (
                <div className="dropdown dropdown-end ml-2">
                  <label tabIndex={0} className="cursor-pointer">
                    <div
                      className="tooltip tooltip-left"
                      data-tip={user?.displayName}
                    >
                      <img
                        className="h-10 w-10 object-cover rounded-full border-2 border-primary transition-all"
                        src={user?.photoURL || admin}
                        alt="Avatar"
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[11] menu bg-base-100 rounded-box w-52 border border-base-300 shadow-xl p-2 mt-3"
                  >
                    <li className="font-semibold text-sm text-base-content/60 mx-2 my-1 border-b border-base-300 pb-2">
                      My Account
                    </li>
                    <li>
                      <NavLink
                        to="/my-profile"
                        className="flex items-center gap-2 hover:text-primary"
                      >
                        <GoPerson size={20} /> Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard"
                        className="flex items-center gap-2 hover:text-primary"
                      >
                        <FiHome /> Dashboard
                      </NavLink>
                    </li>
                    <li onClick={handleLogOut}>
                      <span className="flex items-center gap-2 text-error hover:bg-error/10">
                        <FiLogOut size={20} /> Logout
                      </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex gap-4">
                  <NavLink to="/login" className={baseNavLinkClass}>
                    Login
                  </NavLink>
                  <NavLink to="/register" className={baseNavLinkClass}>
                    Register
                  </NavLink>
                </div>
              )}
              <ThemeToggle />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-base-content rounded-md hover:bg-base-200"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-base-100 border-b border-base-300 shadow-2xl transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
        }`}
      >
        <div className="p-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={mobileNavLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {user ? (
            <div className="pt-4 mt-4 border-t border-base-300 space-y-2">
              <div className="flex items-center gap-3 px-4 py-2">
                <img
                  className="h-10 w-10 object-cover rounded-full border-2 border-primary"
                  src={user?.photoURL || admin}
                  alt="Avatar"
                />
                <span className="font-bold text-base-content">
                  {user?.displayName}
                </span>
              </div>

              <NavLink
                to="/my-profile"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <GoPerson size={20} /> Profile
                </div>
              </NavLink>

              <NavLink
                to="/dashboard"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <FiHome /> Dashboard
                </div>
              </NavLink>

              <button
                onClick={handleLogOut}
                className="w-full text-left px-4 py-2 rounded-lg text-lg font-medium text-error hover:bg-error/10 flex items-center gap-2"
              >
                <FiLogOut size={20} /> Logout
              </button>
            </div>
          ) : (
            <div className="pt-4 mt-4 border-t border-base-300 grid grid-cols-2 gap-2">
              <NavLink
                to="/login"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={mobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
