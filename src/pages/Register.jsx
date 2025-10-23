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
    <div className="place-items-center pb-30">
      <div className="card p-10 rounded-xl w-full shadow-lg max-w-md lg:max-w-lg">
        <div className="py-10 px-10">
          <h1 className="text-primary-accent text-2xl font-semibold">
            Join SkillSwap
          </h1>
          <div className="border-b border-[#2c3e502a] my-5"></div>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset space-y-5">
              <div className="space-y-2">
                <label className="label text-primary-accent font-semibold text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input w-full bg-base-300 border-0 shadow-none focus:outline-0 px-4"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-3">
                <label className="label text-primary-accent font-semibold text-sm">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  className="input w-full bg-base-300 border-0 shadow-none focus:outline-0  px-4"
                  placeholder="Enter your Photo URL"
                />
              </div>
              <div className="space-y-3">
                <label className="label text-primary-accent font-semibold text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input w-full bg-base-300 border-0 shadow-none focus:outline-0  px-4"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-3">
                <label className="label text-primary-accent font-semibold text-sm">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="input w-full bg-base-300 border-0 shadow-none focus:outline-0 px-4"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label className="label">
                  <input
                    type="checkbox"
                    name="terms"
                    className="checkbox checkbox-xs rounded"
                  />
                  Accept <strong>Terms & Condition</strong>
                </label>
              </div>
              <button className="btn btn-primary shadow-none border-0">
                Register
              </button>
            </fieldset>
            {success && (
              <p className="text-green-500 mt-4 text-center">
                Successfully Created Account
              </p>
            )}

            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

            <div>
              <p className="text-center text-primary-accent mt-4 font-semibold">
                Have An Account ?
                <Link className="text-[#F75B5F]" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
