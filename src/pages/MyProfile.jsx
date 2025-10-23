import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle, FaEnvelope, FaEdit } from "react-icons/fa";
import { toast } from "react-hot-toast";
import admin from "../assets/admin.png";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = () => {
    toast.success("Profile update feature coming soon!");
  };

  return (
    <>
      <title>{`Skill Swap | My profile`}</title>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="card w-full ">
          <div className="flex flex-col items-center text-center space-y-4">
            {user?.photoURL ? (
              <img
                src={user?.photoURL || admin}
                alt="User Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 shadow-md "
              />
            ) : (
              <FaUserCircle className="text-8xl text-gray-400" />
            )}

            <div className="space-y-2 animate__animated animate__fadeInUp">
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.displayName || "Anonymous User"}
              </h2>
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <FaEnvelope className="text-gray-800" />
                {user?.email || "No Email Provided"}
              </p>
            </div>

            <div
              onClick={handleUpdateProfile}
              className="btn btn-primary mt-4 flex items-center gap-2"
            >
              <FaEdit />
              Update Profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
