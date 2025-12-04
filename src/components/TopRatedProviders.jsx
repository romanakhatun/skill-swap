import { FaShareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

const TopRatedProviders = () => {
  const Instructors = [
    {
      id: 1,
      name: "Olivia Bennett",
      image:
        "https://images.pexels.com/photos/4467736/pexels-photo-4467736.jpeg?_gl=1*wklauk*_ga*MTIyMTQ0NjIwNi4xNzUzNTQ5MDE2*_ga_8JE65Q40S6*czE3NjEyNDU5MjUkbzEzJGcxJHQxNzYxMjQ2NzgwJGoyOCRsMCRoMA..",
      expertise: "Junior Instructor",
    },
    {
      id: 2,
      name: "James Carter",
      image:
        "https://plus.unsplash.com/premium_photo-1661517372580-29d0cf3cbde4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
      expertise: "Junior Instructor",
    },
    {
      id: 3,
      name: "Sophia Kim",
      image:
        "https://images.pexels.com/photos/7320695/pexels-photo-7320695.jpeg?_gl=1*176ws47*_ga*MTIyMTQ0NjIwNi4xNzUzNTQ5MDE2*_ga_8JE65Q40S6*czE3NjEyNzMzNjckbzE0JGcxJHQxNzYxMjczNDk1JGo4JGwwJGgw",
      expertise: "Junior Instructor",
    },
    {
      id: 4,
      name: "Arjun Mehta",
      image:
        "https://images.pexels.com/photos/5917850/pexels-photo-5917850.jpeg?_gl=1*gmiwpr*_ga*MTIyMTQ0NjIwNi4xNzUzNTQ5MDE2*_ga_8JE65Q40S6*czE3NjEyNzMzNjckbzE0JGcxJHQxNzYxMjczOTUyJGoxNyRsMCRoMA..",
      expertise: "Junior Instructor",
    },
  ];

  return (
    <div className="mt-15 mb-15">
      <div className="flex flex-col gap-5 justify-center xl:flex-row items-center">
        <div className="xl:ml-20 flex-1 max-w-xl">
          <span className="text-xs font-bold bg-[#e79d4e62] text-[#b45f04] rounded px-4 py-1 uppercase">
            Our Instructor
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-2 mt-3">
            Meet Our Expert Instructor
          </h2>
          <p>
            Learn from industry experts who turn experience into inspiration.
            Our instructors guide you every step of the way to help you achieve
            your goals. Learn from industry experts who turn experience into
            inspiration. Our instructors guide you every step of the way to help
            you achieve your goals.
          </p>
          <div className="flex gap-2 mt-2">
            <Link
              to="/contact"
              className="btn btn-neutral text-white rounded-full"
            >
              Contact Us <FaArrowRight />
            </Link>
            <Link
              to={"all-course"}
              className="btn btn-primary rounded-full text-white  px-4"
            >
              Find Course
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 flex-1">
          {Instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="relative w-65 bg-white border-5 border-[#f18817] rounded"
            >
              <img
                className="w-full h-60 object-cover"
                src={instructor.image}
                alt={instructor.name}
              />
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[80%] bg-white rounded shadow-md px-4 py-3 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#1A1A2E] text-sm">
                    {instructor.name}
                  </h3>
                  <p className="text-[#f18817] text-xs">
                    {instructor.expertise}
                  </p>
                </div>

                <div className="bg-[#f18817] p-2 rounded-full cursor-pointer">
                  <FaShareAlt size={12} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatedProviders;
