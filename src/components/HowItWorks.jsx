import { FaSearch, FaGlobe, FaLightbulb, FaUpload } from "react-icons/fa";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-blue-700" />,
      title: "Browse & Discover",
      subtitle: "Explore resources",
    },
    {
      icon: <FaGlobe className="text-3xl text-blue-700" />,
      title: "Connect & Learn",
      subtitle: "",
    },
    {
      icon: <FaLightbulb className="text-3xl text-blue-700" />,
      title: "Share & Grow",
      subtitle: "",
    },
    {
      icon: <FaUpload className="text-3xl text-orange-500" />,
      title: "Share & Grow",
      subtitle: "",
    },
  ];

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-4">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-gray-200">
              {step.icon}
            </div>
            <h3 className="mt-4 text-gray-800 font-semibold">{step.title}</h3>
            {step.subtitle && (
              <p className="text-sm text-gray-500">{step.subtitle}</p>
            )}

            {/* {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-[-50%] w-full h-[2px] bg-gray-300"></div>
              )} */}
          </div>
        ))}
      </div>
    </section>
  );
};
