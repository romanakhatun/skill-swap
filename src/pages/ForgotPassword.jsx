import { use, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation } from "react-router";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!", {
          duration: 3000,
        });

        // Redirect to Gmail after a short delay
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.message, {
          duration: 3000,
        });
      });
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
          Reset Your Password
        </h1>
        <div className="border-b border-base-300 mb-6"></div>

        <form onSubmit={handleResetPassword} className="space-y-5 mr-8">
          {/* Email Field */}
          <div>
            <label className="label text-primary-accent font-semibold text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              defaultValue={prefilledEmail}
              required
              className="input input-bordered w-full bg-base-200"
              placeholder="Enter your email address"
            />
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full shadow-none border-0">
            Reset Password
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Remembered your password?
          <Link to="/login" className="text-primary font-semibold">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
