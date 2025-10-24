import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import admin from "../assets/admin.png";
import { Link } from "react-router";
import { MdOutlineMail } from "react-icons/md";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <title>{`Skill Swap | My profile`}</title>
      <div className="flex items-center justify-center p-6">
        <div className="card w-full ">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Profile Photo */}
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
              {/* Display Name */}
              <h2 className="text-2xl font-bold text-gray-800">
                {user?.displayName || "Anonymous User"}
              </h2>

              <p className="text-gray-600 flex items-center justify-center gap-2">
                <MdOutlineMail />
                {user?.email || "No Email Provided"}
              </p>
            </div>

            <Link
              to={"/update-profile"}
              className="btn btn-primary mt-4 flex items-center gap-2"
            >
              <FaEdit />
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
