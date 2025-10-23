import Banner from "../components/Banner";
import BecomeInstructor from "../components/BecomeInstructor";
import { HowItWorks } from "../components/HowItWorks";
import PopularSkills from "../components/PopularSkills";
import TopRatedProviders from "../components/TopRatedProviders";

const Home = () => {
  return (
    <>
      <div className="my-7">
        <Banner />
      </div>
      <div className="my-10">
        <PopularSkills />
      </div>
      <HowItWorks />
      <BecomeInstructor />
      {/* <TopRatedProviders /> */}
    </>
  );
};

export default Home;
