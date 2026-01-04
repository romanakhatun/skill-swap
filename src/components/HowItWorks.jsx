import { CiSearch } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
import { PiSwapDuotone } from "react-icons/pi";

export const HowItWorks = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-10"
      // data-aos="fade-up"
    >
      <div className="mb-15">
        <h2 className="text-2xl md:text-3xl font-semibold text-base-content mt-5">
          How It Works
        </h2>

        <div className="line mx-auto mt-2"></div>
      </div>

      <div className="flex gap-6 flex-col sm:flex-row">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-xl bg-purple-400 flex items-center justify-center shadow-lg text-white">
            <CiSearch />
          </div>
          <div className="pt-5">
            <h3 className="text-lg font-semibold">Discover Skills</h3>
          </div>
        </div>

        {/* Dotted Line */}
        <div className="hidden md:flex items-center ">
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
          <div className="w-24 border-t border-dashed border-gray-300"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-xl bg-cyan-400 flex items-center justify-center shadow-lg text-white">
            <PiSwapDuotone className="rotate-3" />
          </div>

          <div className="pt-5">
            <h3 className="text-lg font-semibold">Connect & Swap</h3>
          </div>
        </div>

        {/* Dotted Line */}
        <div className="hidden md:flex items-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          <div className="w-24 border-t border-dashed border-gray-300"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-xl bg-pink-300 flex items-center justify-center shadow-lg text-white">
            <FaRegLightbulb />
          </div>

          <div className="pt-5">
            <h3 className="text-lg font-semibold">Learn & Grow</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
