import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const SocialSignIn = () => {
  const { signInGoogleUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInGoogleUser()
      .then((result) => {
        const user = result.user;
        toast.success(`Welcome, ${user.displayName}!`, {
          duration: 3000,
          position: "top-right",
        });
        // redirect after login
        navigate(location.state || "/");
      })
      .catch(() => {
        // console.error(error);
        toast.error("Google Sign-In failed!", {
          duration: 3000,
          position: "top-right",
        });
      });
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-gray-700 font-medium bg-white hover:bg-gray-100 transition-all duration-200 cursor-pointer mb-5"
      >
        <FcGoogle size={24} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialSignIn;
