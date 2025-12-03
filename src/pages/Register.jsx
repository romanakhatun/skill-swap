import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialSignIn from "../components/SocialSignIn";

const Register = () => {
  const [showPass, setShowPass] = useState(true);
  const { createUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const terms = e.target.terms.checked;

    const pass6Pattern = /^.{6,}$/;
    const passUpPattern = /(?=.*[A-Z])/;
    const passLoPattern = /(?=.*[a-z])/;
    if (!pass6Pattern.test(password)) {
      toast.error("Password Must be at least 6 characters long", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    if (!passUpPattern.test(password)) {
      toast.error("Password Must contain at least one uppercase letter", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    if (!passLoPattern.test(password)) {
      toast.error("Password Must contain at least one uppercase letter", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }

    if (!terms) {
      toast.error("Please accept out terms & condition", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        toast.success("Registration Successful", {
          duration: 3000,
          position: "top-right",
        });

        //update profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };

        updateProfile(result.user, profile);

        // redirect after Register
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message || "Registration Failed", {
          duration: 3000,
          position: "top-right",
        });
      });
  };
  return (
    <>
      <title>{`Skill Swap | Join SkillSwap`}</title>
      <div className="flex justify-center items-center mt-10">
        <div className="rounded-xl w-full max-w-md bg-base-100 p-8 border border-base-300">
          <Toaster
            containerStyle={{
              top: 100,
              right: 50,
            }}
            reverseOrder={false}
          />
          <h1 className="text-primary text-2xl font-semibold mb-4">
            Join SkillSwap
          </h1>
          <div className="border-b border-base-300 mb-6"></div>

          <form onSubmit={handleRegister} className="space-y-5 mr-8">
            {/* Name Fields */}
            <div>
              <label className="label text-sm font-semibold">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="input input-bordered w-full bg-base-200"
                placeholder="Enter your name"
              />
            </div>

            {/* Photo URL Fields */}
            <div>
              <label className="label text-sm font-semibold">
                Photo URL <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="photo"
                required
                className="input input-bordered w-full bg-base-200"
                placeholder="Enter your Photo URL"
              />
            </div>

            {/* Email Fields */}
            <div>
              <label className="label text-sm font-semibold">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="input input-bordered w-full bg-base-200"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password Fields */}
            <div>
              <label className="label text-sm font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <label className="input w-full bg-base-200">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="cursor-pointer"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </label>
            </div>

            {/* Terms and condition Fields */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="terms"
                className="checkbox rounded-sm checkbox-primary checkbox-xs"
              />
              <span className="text-sm">
                Accept <strong>Terms & Condition</strong>
              </span>
            </div>
            <button className="btn btn-primary w-full">Register</button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <SocialSignIn />

          <p className="text-center text-sm">
            Have an account?
            <Link to="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
