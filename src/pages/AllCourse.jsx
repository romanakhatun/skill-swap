import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";

const AllCourse = () => {
  const data = useLoaderData();
  return (
    <div
      className="my-10"
      // data-aos="zoom-in-up"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-4">
        All Course ({data.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 popular-bg gap-5">
        {data.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
