import React from "react";
import { FaGraduationCap, FaCode, FaHeart } from "react-icons/fa";
import BecomeInstructor from "../components/BecomeInstructor";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4 transition-colors duration-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-base-content mb-6 tracking-tight">
          Meet <span className="text-primary italic">Your Learning Hub</span>
        </h1>
        <p className="text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
          We believe{" "}
          <strong className="text-secondary">
            learning should be accessible and exciting
          </strong>{" "}
          for everyone, everywhere. Our mission is to connect you with the
          perfect course, whether it's mastering the guitar, finding your zen
          with yoga, or diving into the world of coding.
        </p>
        <div className="line mx-auto mt-8"></div>
      </div>

      {/* Stats/Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Diverse Learning */}
        <div className="card bg-base-200 border border-base-300 shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaGraduationCap size={40} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-base-content mb-3">
            Diverse Learning
          </h2>
          <p className="text-base-content/70">
            From <strong className="text-primary">Guitar</strong> chords to{" "}
            <strong>Yoga</strong> poses and{" "}
            <strong className="text-primary">Python</strong> scripts—our
            marketplace hosts a vast array of subjects.
          </p>
        </div>

        {/* Expert Instructors */}
        <div className="card bg-base-200 border border-base-300 shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCode size={40} className="text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-base-content mb-3">
            Quality Instruction
          </h2>
          <p className="text-base-content/70">
            Every course is vetted for quality, ensuring you receive the best
            possible instruction from{" "}
            <strong className="text-secondary">industry-leading</strong>{" "}
            professionals.
          </p>
        </div>

        {/* Community & Passion */}
        <div className="card bg-base-200 border border-base-300 shadow-xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
          <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaHeart size={40} className="text-error" />
          </div>
          <h2 className="text-2xl font-bold text-base-content mb-3">
            Driven by Passion
          </h2>
          <p className="text-base-content/70">
            We are passionate about personal growth and empowering you to follow
            your curiosity and achieve{" "}
            <strong className="text-error">your goals</strong>.
          </p>
        </div>
      </div>

      <BecomeInstructor />
    </div>
  );
};

export default AboutUs;
