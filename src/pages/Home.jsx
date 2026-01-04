import { useQuery } from "@tanstack/react-query";
import Banner from "../components/Banner";
import StatsSection from "../components/StatsSection";
import { Features } from "../components/Features";
import SkillCard from "../components/SkillCard";
import { HowItWorks } from "../components/HowItWorks";
import TopRatedProviders from "../components/TopRatedProviders";
import { Testimonials } from "../components/Testimonials";
import BecomeInstructor from "../components/BecomeInstructor";
import FAQSection from "../components/FAQSection";
import { Newsletter } from "../components/Newsletter";
import { Link } from "react-router";
import useAxios from "../hooks/useAxios";

const Home = () => {
  const axiosInstance = useAxios();

  const { data, isLoading } = useQuery({
    queryKey: ["trendingSkills"],
    queryFn: async () => {
      const res = await axiosInstance.get("/all-courses?size=8");
      return res.data;
    },
  });

  const courses = data?.result || [];
  console.log(courses);

  return (
    <main className="space-y-16 md:space-y-24 mb-16">
      <section className="mt-12">
        <Banner />
      </section>

      <StatsSection />

      <Features />

      <section className="container mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Trending Expertise
            </h2>
            <div className="line mt-2"></div>
          </div>
          <Link
            to="/all-course"
            className="btn btn-outline btn-primary btn-sm md:btn-md rounded-full shadow-none"
          >
            View All
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-48 w-full rounded-2xl"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses?.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        )}
      </section>

      <HowItWorks />

      <TopRatedProviders />

      <Testimonials />

      <BecomeInstructor />

      <FAQSection />

      <Newsletter />
    </main>
  );
};

export default Home;
