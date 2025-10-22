// src/components/SkillCard.jsx

import React from "react";
import { FaStar } from "react-icons/fa";

const SkillCard = ({ skill, index }) => {
  const { skillName, rating, price, image, providerName } = skill;

  return (
    <div
      className="max-w-xs rounded-xl overflow-hidden shadow-card-elevated bg-white transition duration-500 hover:scale-[1.02]"
      data-aos="fade-up"
      data-aos-delay={index * 100} // Staggered loading for innovation
    >
      {/* Image with Gradient Overlay */}
      <div className="relative h-40">
        <img
          src={image}
          alt={skillName}
          className="w-full h-full object-cover"
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-dark-bg/40"></div>
      </div>

      <div className="p-4">
        {/* Skill Name */}
        <h3 className="text-lg font-semibold text-dark-bg mb-2">{skillName}</h3>

        {/* Rating and Price */}
        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center text-rating-star">
            <FaStar className="mr-1" />
            <span className="text-dark-bg font-medium">{rating}</span>
          </div>
          <p className="text-xl font-bold text-primary-accent">
            ${price}
            <span className="text-xs font-normal">/hr</span>
          </p>
        </div>

        {/* Provider Info (Optional for this component, but good practice) */}
        <p className="text-xs text-gray-500 mb-4">Provided by {providerName}</p>

        {/* View Details Button */}
        <a
          href={`/skill/${skill.skillId}`}
          className="block w-full text-center py-2 text-sm font-bold rounded-lg text-white bg-primary-accent hover:bg-secondary-accent transition duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default SkillCard;
