import React from "react";
import { FaGraduationCap, FaCode, FaHeart } from "react-icons/fa";
import BecomeInstructor from "../components/BecomeInstructor";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
          Meet <span className="text-primary">Your Learning Hub</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe <strong>learning should be accessible and exciting</strong>{" "}
          for everyone, everywhere. Our mission is to connect you with the
          perfect course, whether it's mastering the guitar, finding your zen
          with yoga, or diving into the world of coding.
        </p>
      </div>

      <hr className="my-8 border-base-300" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card bg-base-300 shadow-md p-6 text-center">
          <FaGraduationCap size={48} className="text-primary mx-auto mb-4" />
          <h2 className="card-title justify-center text-2xl font-semibold mb-2">
            Diverse Learning
          </h2>
          <p className="text-gray-600">
            From <strong>Guitar</strong> chords to <strong>Yoga</strong> poses
            and <strong>Python</strong> scripts—our marketplace hosts a vast
            array of subjects taught by experts.
          </p>
        </div>

        {/* Expert Instructors */}
        <div className="card bg-base-300 shadow-md p-6 text-center">
          <FaCode size={48} className="text-secondary mx-auto mb-4" />
          <h2 className="card-title justify-center text-2xl font-semibold mb-2">
            Quality Instruction
          </h2>
          <p className="text-gray-600">
            Every course is vetted for quality, ensuring you receive the best
            possible instruction from industry-leading professionals.
          </p>
        </div>

        {/* Community & Passion */}
        <div className="card bg-base-300 shadow-md p-6 text-center">
          <FaHeart size={48} className="text-error mx-auto mb-4" />
          <h2 className="card-title justify-center text-2xl font-semibold mb-2">
            Driven by Passion
          </h2>
          <p className="text-gray-600">
            We are passionate about personal growth and empowering you to follow
            your curiosity and achieve your goals.
          </p>
        </div>
      </div>

      <BecomeInstructor />
    </div>
  );
};

export default AboutUs;
