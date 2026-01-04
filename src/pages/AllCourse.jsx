import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import { useState, useMemo } from "react";

const AllCourse = () => {
  const initialData = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("none");

  const filteredAndSortedData = useMemo(() => {
    let processedData = [...initialData].filter((skill) =>
      skill.skillName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOption !== "none") {
      const [field, direction] = sortOption.split("_");
      processedData.sort((a, b) => {
        let comparison = 0;
        const valueA = a[field];
        const valueB = b[field];
        if (valueA > valueB) comparison = 1;
        else if (valueA < valueB) comparison = -1;
        return direction === "asc" ? comparison : comparison * -1;
      });
    }
    return processedData;
  }, [initialData, searchTerm, sortOption]);

  return (
    <div className="my-10 px-4 transition-colors duration-300">
      {/* Header with Dynamic Count */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            Explore Courses
          </h2>
          <p className="text-base-content/60 mt-1">
            Showing {filteredAndSortedData.length} available programs
          </p>
        </div>
        <div className="line hidden md:block"></div>
      </div>

      {/* --- Search and Sort Controls Container --- */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center bg-base-200 p-6 rounded-2xl border border-base-300 shadow-sm">
        {/* Theme-Aware Search Input */}
        <div className="relative flex-grow w-full">
          <input
            type="text"
            placeholder="Search by course name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full bg-base-100 border-base-300 text-base-content focus:border-primary"
          />
        </div>

        {/* Theme-Aware Sorting Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="select select-bordered bg-base-100 border-base-300 text-base-content w-full md:w-auto focus:border-primary"
        >
          <option value="none">Sort By Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_desc">Rating: High to Low</option>
          <option value="rating_asc">Rating: Low to High</option>
        </select>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedData.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>

      {/* Message for no results */}
      {filteredAndSortedData.length === 0 && (
        <div className="text-center py-20 bg-base-200 rounded-3xl border border-dashed border-base-300 mt-8">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-base-content">
            No courses found
          </h3>
          <p className="text-base-content/60 mt-2">
            Try adjusting your search term or sorting filters.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="btn btn-primary btn-sm mt-4 rounded-full"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default AllCourse;
