import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import BecomeInstructor from "../components/BecomeInstructor";
import { HowItWorks } from "../components/HowItWorks";
import TopRatedProviders from "../components/TopRatedProviders";
import SkillCard from "../components/SkillCard";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="my-7">
        <Banner />
      </div>
      <div
        className="my-10"
        // data-aos="zoom-in-up"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-4">
          Popular Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 popular-bg gap-5">
          {data.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      </div>
      <HowItWorks />
      <TopRatedProviders />
      <BecomeInstructor />
    </>
  );
};

export default Home;
