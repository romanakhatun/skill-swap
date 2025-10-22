import Banner from "../components/Banner";
import PopularSkills from "../components/PopularSkills";

const Home = () => {
  return (
    <>
      <div className="my-7">
        <Banner />
      </div>
      <div>
        <PopularSkills />
      </div>
      {/* <SliderPopular /> */}
    </>
  );
};

export default Home;
