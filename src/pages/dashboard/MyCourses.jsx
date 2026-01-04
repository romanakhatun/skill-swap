import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";

const MyCourses = () => {
  const axiosInstance = useAxios();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["myCourses"],
    queryFn: async () => {
      const res = await axiosInstance.get("/all-courses");
      return res.data;
    },
  });

  const courses = data?.result || [];

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axiosInstance.delete(`/course/${id}`);
        toast.success("Course deleted successfully!");
        queryClient.invalidateQueries(["myCourses"]);
      } catch {
        toast.error("Error deleting course");
      }
    }
  };

  if (isLoading)
    return (
      <div className="text-center p-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Courses</h2>
        <Link to="/dashboard/add-course" className="btn btn-primary btn-sm">
          Add New
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>
                  <img
                    src={course.image}
                    className="w-12 h-12 rounded-lg object-cover"
                    alt="course"
                  />
                </td>
                <td className="font-medium">{course.skillName}</td>
                <td>{course.category}</td>
                <td>${course.price}</td>
                <td className="flex gap-3">
                  {/* Update Link */}
                  <Link
                    to={`/dashboard/update-course/${course._id}`}
                    className="text-info cursor-pointer"
                  >
                    <FaEdit size={18} />
                  </Link>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="text-error cursor-pointer"
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
