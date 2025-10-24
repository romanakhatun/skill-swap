import React, { use, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  FaStar,
  FaEnvelope,
  FaUser,
  FaTag,
  FaDollarSign,
  FaCalendarCheck,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../contexts/AuthContext";

const SkillDetails = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();
  const [skillData, setSkillData] = useState(null);

  useEffect(() => {
    const filteredData = data.find((skill) => skill.skillId == id);
    setSkillData(filteredData);
  }, [data, id]);

  const handleEnroll = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    if (!name || !email) {
      toast.error("Please fill in all fields!", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }

    toast.success(`Enrollment submitted for ${skillName}`, {
      duration: 3000,
      position: "top-right",
    });
    e.target.reset();
  };
  if (!skillData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = skillData;

  return (
    <div className="min-h-screen bg-base-200 flex flex-col gap-10 items-center justify-center py-10 px-4">
      <div className="card lg:card-side bg-base-100 max-w-5xl w-full border border-base-300">
        {/* Left Image */}
        <figure className="lg:w-1/2 w-full" data-aos="fade-right">
          <img
            src={image}
            alt={skillName}
            className="w-full h-full object-cover rounded-l-xl"
          />
        </figure>

        {/* Right Details */}
        <div className="card-body lg:w-1/2 space-y-4" data-aos="fade-left">
          <h2 className="card-title text-2xl font-bold text-primary">
            {skillName}
          </h2>

          <p className="text-gray-600">{description}</p>

          <div className="space-y-2">
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaUser className="text-primary" /> <strong>Instructor:</strong>
              {providerName}
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaEnvelope className="text-primary" /> <strong>Email:</strong>
              {providerEmail}
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaTag className="text-primary" /> <strong>Category:</strong>
              {category}
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-700">
              <FaCalendarCheck className="text-primary" />
              <strong>Slots Available:</strong> {slotsAvailable}
            </p>
          </div>

          {/* Price & Rating */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1 text-[#eeb743]">
              <FaStar />
              <span className="font-semibold">{rating}</span>
            </div>

            <div className="text-lg font-bold flex items-center gap-1 text-green-600">
              <FaDollarSign /> {price}
            </div>
          </div>

          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary w-full lg:w-auto">
              Book Session
            </button>
          </div>
        </div>
      </div>
      {/* Enroll Form */}
      <div
        className="card bg-base-100 shadow-md w-full max-w-md p-8 border border-base-300"
        data-aos="fade-up"
      >
        <Toaster
          containerStyle={{
            top: 100,
            right: 50,
          }}
          reverseOrder={false}
        />
        <h3 className="text-xl font-semibold text-primary mb-4">
          Enroll in {skillName}
        </h3>
        <form onSubmit={handleEnroll} className="space-y-4 mr-8">
          <div>
            <label className="label text-sm font-semibold">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-base-200"
              required
            />
          </div>

          <div>
            <label className="label text-sm font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-base-200"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Submit Enrollment
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkillDetails;
