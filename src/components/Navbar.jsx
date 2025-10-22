import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[#2d447a] font-bold text-2xl">SkillSwap</h1>

        <div>
          <nav>
            <ul className="flex gap-4 text-[#2C3E50] font-semibold">
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>My Profile</NavLink>
              </li>
              <li>
                <NavLink>Login</NavLink>
              </li>
              <li>
                <NavLink>Register</NavLink>
              </li>
              <li>
                <NavLink>Logout</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
