import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {
  FaUserCircle,
  FaEdit,
  FaCamera,
  FaShieldAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import admin from "../assets/admin.png";
import { Link, useNavigate } from "react-router";
import { MdOutlineMail, MdVerifiedUser } from "react-icons/md";
import { toast } from "react-hot-toast";

const MyProfile = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/login");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 md:p-10 transition-colors duration-300">
      <title>My Profile | Skill Swap</title>

      <div className="w-full max-w-4xl bg-base-100 rounded-[2rem] shadow-2xl border border-base-300 overflow-hidden">
        {/* Profile Header/Cover Background */}
        <div className="h-32 md:h-48 bg-gradient-to-r from-primary via-primary-accent to-secondary relative">
          <div className="absolute -bottom-12 md:-bottom-16 left-8 md:left-12">
            <div className="relative group">
              <img
                src={user?.photoURL || admin}
                alt="User Avatar"
                className="w-24 h-24 md:w-32 md:h-32 rounded-3xl object-cover border-4 border-base-100 shadow-xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <FaCamera className="text-white text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-16 md:pt-20 pb-10 px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-3xl md:text-4xl font-black text-base-content tracking-tight">
                  {user?.displayName || "SkillSwap Learner"}
                </h2>
                <MdVerifiedUser className="text-blue-500 text-2xl" />
              </div>
              <p className="text-lg text-base-content/60 flex items-center gap-2">
                <MdOutlineMail className="text-primary" />
                {user?.email}
              </p>
            </div>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/update-profile"
                className="btn btn-primary rounded-xl px-6 shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-105 transition-all"
              >
                <FaEdit />
                Edit Profile
              </Link>

              <button
                onClick={handleLogout}
                className="btn btn-outline btn-error rounded-xl px-6 flex items-center gap-2 hover:scale-105 transition-all"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>

          {/* Info Cards Grid (Role, Status, etc.) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-base-200 rounded-2xl border border-base-300 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl font-bold">
                <FaShieldAlt />
              </div>
              <div>
                <p className="text-xs font-bold opacity-50 uppercase">
                  Account Role
                </p>
                <p className="font-bold text-base-content">Student</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
