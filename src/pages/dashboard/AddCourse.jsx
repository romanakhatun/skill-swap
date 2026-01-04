import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import useAxios from "../../hooks/useAxios";

const AddCourse = () => {
  const axiosInstance = useAxios();

  const { mutate, isPending } = useMutation({
    mutationFn: (newCourse) => axiosInstance.post("/add-course", newCourse),
    onSuccess: () => {
      toast.success("Course Added!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const courseData = {
      skillName: form.skillName.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      image: form.image.value,
      description: form.description.value,
    };

    mutate(courseData);
    form.reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-100 rounded-2xl shadow-md border border-base-300">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="skillName"
          placeholder="Skill Name"
          className="input input-bordered w-full"
          required
        />

        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option value="Technology">Technology</option>
          <option value="Artas">Arts</option>
          <option value="Language">Language</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        <button disabled={isPending} className="btn btn-primary w-full">
          {isPending ? "Adding..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
