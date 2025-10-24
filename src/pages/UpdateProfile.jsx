import { use } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(name, photo);

    //update profile
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateProfile(user, profile)
      .then(() => {
        toast.success("Updated Successfully");
        navigate("/my-profile");
        window.location.reload();
      })
      .catch((err) => toast.error(err.message || "Update Failed"));
  };

  return (
    <div className="flex justify-center items-center mt-15">
      <div className="w-full bg-base-100 max-w-md rounded-xl p-10 border border-base-300">
        <Toaster
          containerStyle={{
            top: 100,
            right: 50,
          }}
          reverseOrder={false}
        />
        <h1 className="text-primary text-2xl font-semibold mb-4">
          Update Profile
        </h1>
        <div className="border-b border-base-300 mb-6"></div>

        <form onSubmit={handleUpdateProfile} className="space-y-5 mr-8">
          {/* Name Field */}
          <div>
            <label className="label text-sm font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="input input-bordered w-full bg-base-200"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo URL Field */}
          <div>
            <label className="label text-sm font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              className="input input-bordered w-full bg-base-200"
              placeholder="Enter your Photo URL"
            />
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full shadow-none border-0">
            Update
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don't Need Update?{" "}
          <Link to="/my-profile" className="text-primary font-semibold">
            Back to Profile
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UpdateProfile;
