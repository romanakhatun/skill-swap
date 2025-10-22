import { FaStar } from "react-icons/fa";

const SkillCard = ({ skill }) => {
  const { skillName, rating, price, image } = skill;

  return (
    <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={skillName}
          className="w-full h-64 object-cover transform transition-transform duration-500 ease-out hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 to-transparent"></div>

      <div className="absolute bottom-4 left-4 right-4 text-white z-10">
        <h3 className="text-lg font-semibold mb-2 drop-shadow-md">
          {skillName}
        </h3>

        <div className="flex items-center justify-between text-sm mb-3">
          <div className="flex items-center">
            {Array.from({ length: Math.round(rating) }).map((_, idx) => (
              <FaStar key={idx} className="text-yellow-400 mr-1 text-sm" />
            ))}
          </div>

          <p className="text-xl font-bold text-white drop-shadow-sm">
            ${price}
          </p>
        </div>

        {/* Button */}
        {/* <a
          href={`/skill/${skillId}`}
          className="block w-full text-center py-2 text-sm font-bold rounded-lg text-white bg-[#2d447a] hover:bg-[#233661] transition duration-300"
        >
          View Details
        </a> */}
      </div>
    </div>
  );
};

export default SkillCard;
