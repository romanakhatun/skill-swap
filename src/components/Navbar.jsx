import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <img className="w-[30px]" src={logo} alt="" />
          <h1 className="text-[#2d447a] font-bold text-2xl pt-1">
            Ski<span className="text-[#178790]">ll</span>
            <span className="text-[#e79c4e]">Swap</span>
          </h1>
        </div>

        <div>
          <nav>
            <ul className="flex gap-4 text-[#2C3E50] font-semibold">
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "underline" : "")}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              {user ? (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to={"my-profile"}
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li className="cursor-pointer" onClick={handleLogOut}>
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to={"/login"}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to={"/register"}
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
