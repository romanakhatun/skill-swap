import { FaArrowRightLong } from "react-icons/fa6";

const BecomeInstructor = () => {
  return (
    <div className="rounded-xl p-8 md:p-15 flex flex-col md:flex-row justify-between items-center gap-6 mt-10 bg-gradient-to-r from-[#fff7ef] to-[#fdfaf8]">
      <div className="space-y-4 text-center md:text-left">
        <p className="text-[#e79c4e] font-medium text-[18px] tracking-wide">
          Become A Instructor
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
          You can join with <div className="hidden md:block md:mt-2" />{" "}
          SkillSwap as a<span className="text-[#e79c4e]"> Instructor</span>?
        </h2>
      </div>

      <button className="btn btn-primary px-6 py-1 rounded-lg">
        Share Your Expertise
        <FaArrowRightLong className="ml-2" />
      </button>
    </div>
  );
};

export default BecomeInstructor;
