import { Link } from "react-router";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-1">
        <img className="w-[30px] sm:w-[35px]" src={logo} alt="SkillSwap Logo" />
        <h1 className="text-[#2d447a] font-bold text-xl sm:text-3xl pt-1">
          <span className="text-[#e79c4e]">Swap</span>
          Ski
          <span className="text-[#178790]">ll</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
