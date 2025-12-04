import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import { useState, useMemo } from "react";

const AllCourse = () => {
  const initialData = useLoaderData();

  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  const [sortOption, setSortOption] = useState("none");

  const filteredAndSortedData = useMemo(() => {
    //  Filtering by search term
    let processedData = initialData.filter((skill) =>
      skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sorting
    if (sortOption !== "none") {
      const [field, direction] = sortOption.split("_");

      processedData.sort((a, b) => {
        let comparison = 0;
        const valueA = a[field];
        const valueB = b[field];

        if (valueA > valueB) {
          comparison = 1;
        } else if (valueA < valueB) {
          comparison = -1;
        }
        return direction === "asc" ? comparison : comparison * -1;
      });
    }

    return processedData;
  }, [initialData, searchTerm, sortOption]);

  // Handler for Sorting
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div
      className="my-10"
      // data-aos="zoom-in-up"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-4">
        All Course ({filteredAndSortedData.length})
      </h2>

      {/* --- Search and Sort Controls Container --- */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="Search courses by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg flex-grow w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Sorting Dropdown */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
        >
          <option value="none" disabled>
            Sort By...
          </option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_desc">Rating: High to Low</option>
          <option value="rating_asc">Rating: Low to High</option>
        </select>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 popular-bg gap-5">
        {filteredAndSortedData.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>

      {/* Message for no results */}
      {filteredAndSortedData.length === 0 && (
        <p className="text-center text-xl text-gray-500 mt-8">
          No courses found matching your criteria.
        </p>
      )}
    </div>
  );
};

export default AllCourse;
