import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  // Use _id for MongoDB and courseName to match your backend
  const { _id, courseName, skillName, rating, price, image } = skill;
  const displayName = courseName || skillName;
  const displayId = _id || skill.skillId;

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={displayName}
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-1.5"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 to-transparent"></div>

      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
        <h3 className="text-xl font-bold mb-2 drop-shadow-md">{displayName}</h3>

        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center">
            {Array.from({ length: Math.round(rating || 0) }).map((_, idx) => (
              <FaStar key={idx} className="text-[#eeb743] mr-1 text-sm" />
            ))}
          </div>
          <p className="text-lg font-semibold text-white drop-shadow-sm">
            ${price}
          </p>
        </div>
        <button>
          <Link
            to={`/skill-details/${displayId}`}
            className="btn border-0 shadow-none text-sm font-medium rounded-full text-white bg-[#e9eff763] hover:bg-[#e99359] transition duration-300"
          >
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
