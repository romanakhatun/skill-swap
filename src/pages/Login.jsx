import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast, Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialSignIn from "../components/SocialSignIn";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const { signInUser } = use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        // console.log(result.user);
        toast.success("Login successful!", {
          duration: 3000,
          position: "top-right",
        });
        // redirect after login
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(err.message || "Login Failed", {
          duration: 3000,
          position: "top-right",
        });
      });
  };

  const handleForgetPassNavigate = () => {
    const email = emailRef.current?.value || "";
    navigate("/forget-password", { state: { email } });
  };

  return (
    <>
      <title>{`Skill Swap | Login to SkillSwap`}</title>
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
            Login to SkillSwap
          </h1>
          <div className="border-b border-base-300 mb-6"></div>

          <form onSubmit={handleSignIn} className="space-y-5 mr-8">
            {/* Email Field */}
            <div>
              <label className="label text-primary-accent font-semibold text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                className="input input-bordered w-full bg-base-200"
                placeholder="Enter your email address"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="label text-primary-accent font-semibold text-sm">
                Password
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

            {/* Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <p
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={handleForgetPassNavigate}
              >
                Forgot Password?
              </p>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full shadow-none border-0">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <SocialSignIn />

          {/* Register Link */}
          <p className="text-center text-sm">
            Don’t Have An Account?
            <Link to="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
