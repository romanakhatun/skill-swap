import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { signInUser, auth } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login successful!");
        navigate(location.state || "/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Invalid email or password!");
      });
  };

  const handleResetPassword = () => {
    if (!resetEmail) {
      toast.error("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full bg-base-100 max-w-md shadow-lg rounded-xl p-10">
        <h1 className="text-primary text-2xl font-semibold mb-4">
          Login to SkillSwap
        </h1>
        <div className="border-b border-base-300 mb-6"></div>

        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="label text-primary-accent font-semibold text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full bg-base-200"
              placeholder="Enter your email address"
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="label text-primary-accent font-semibold text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered w-full bg-base-200"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <p
              onClick={handleResetPassword}
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Forgot Password?
            </p>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full shadow-none border-0">
            Login
          </button>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-center mt-2 font-medium">{error}</p>
          )}

          {/* Register Link */}
          <p className="text-center text-primary-accent mt-4 font-semibold">
            Don’t Have An Account?{" "}
            <Link className="text-[#F75B5F]" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
