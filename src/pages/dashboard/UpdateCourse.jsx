import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const UpdateCourse = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: course, isLoading } = useQuery({
    queryKey: ["course", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/all-courses`);
      const courseList = res.data?.result?.[0] || [];
      return courseList.find((item) => item._id === id);
    },
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedData = {
      skillName: form.skillName.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      image: form.image.value,
      description: form.description.value,
    };

    try {
      await axiosInstance.patch(`/course/${id}`, updatedData);
      toast.success("Course updated successfully!");
      queryClient.invalidateQueries(["myCourses"]);
      navigate("/dashboard/my-courses");
    } catch {
      toast.error("Failed to update course");
    }
  };

  if (isLoading)
    return (
      <div className="text-center p-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-100 rounded-2xl shadow-md border border-base-300">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Course</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Skill Name */}
        <div className="form-control">
          <label className="label font-semibold">Skill Name</label>
          <input
            type="text"
            name="skillName"
            defaultValue={course?.skillName}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label font-semibold">Category</label>
          <select
            name="category"
            defaultValue={course?.category}
            className="select select-bordered w-full"
            required
          >
            <option value="Technology">Technology</option>
            <option value="Arts">Arts</option>
            <option value="Language">Language</option>
            <option value="Music">Music</option>
          </select>
        </div>

        {/* Price and Image */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label font-semibold">Price ($)</label>
            <input
              type="number"
              name="price"
              defaultValue={course?.price}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input
              type="url"
              name="image"
              defaultValue={course?.image}
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label font-semibold">Description</label>
          <textarea
            name="description"
            defaultValue={course?.description}
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;
