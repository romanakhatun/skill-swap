import {
  HiLightningBolt,
  HiShieldCheck,
  HiAcademicCap,
  HiGlobe,
} from "react-icons/hi";

export const Features = () => {
  const features = [
    {
      title: "Lifetime Access",
      desc: "Learn at your own pace with unlimited lifetime access to all your enrolled courses.",
      icon: <HiAcademicCap className="w-8 h-8" />,
    },
    {
      title: "Expert Mentors",
      desc: "Get guidance from industry professionals who are experts in their respective fields.",
      icon: <HiLightningBolt className="w-8 h-8" />,
    },
    {
      title: "Recognized Certificates",
      desc: "Earn certificates that are recognized by top companies and boost your LinkedIn profile.",
      icon: <HiShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Global Community",
      desc: "Connect with thousands of students worldwide and grow your professional network.",
      icon: <HiGlobe className="w-8 h-8" />,
    },
  ];

  return (
    <section className="my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-2">
          Why Choose Our Platform?
        </h2>
        <div className="line mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-base-200 border border-base-300 hover:border-primary transition-colors group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-base-content/70 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
