import Banner from "../components/Banner";
import { HowItWorks } from "../components/HowItWorks";
import PopularSkills from "../components/PopularSkills";

const Home = () => {
  return (
    <>
      <div className="my-7">
        <Banner />
      </div>
      <div className="my-10">
        <PopularSkills />
      </div>
      {/* <HowItWorks /> */}
    </>
  );
};

export default Home;
