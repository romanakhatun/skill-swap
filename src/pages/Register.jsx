import { use, useState } from "react";
import { Link } from "react-router";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const terms = e.target.terms.checked;
    console.log(terms, email, name, password, photo);

    if (!terms) {
      setError("Please accept out terms & condition");
      return;
    }

    //Reset Error
    setError("");
    setSuccess(false);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        //update profile
        const profile = {
          displayName: name,
          photoURL: photo,
        };

        updateProfile(result.user, profile)
          .then(() => {})
          .catch(() => {});
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card rounded-xl shadow-lg w-full max-w-md bg-base-100 p-8">
        <h1 className="text-primary text-2xl font-semibold mb-4">
          Join SkillSwap
        </h1>
        <div className="border-b border-base-300 mb-6"></div>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Input Fields */}
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

          <div>
            <label className="label text-sm font-semibold">Email address</label>
            <input
              type="email"
              name="email"
              required
              className="input input-bordered w-full bg-base-200"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label className="label text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              required
              className="input input-bordered w-full bg-base-200"
              placeholder="Enter your password"
            />
          </div>

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

          {success && (
            <p className="text-green-500 text-center">
              Successfully Created Account
            </p>
          )}
          {error && <p className="text-red-600 text-center">{error}</p>}

          <p className="text-center mt-4 text-sm">
            Have an account?{" "}
            <Link to="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
