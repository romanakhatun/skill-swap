import pageError from "../assets/page-error.svg";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <>
      <title>{`Skill Swap | Page Not Found`}</title>
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <img className="h-36 mx-auto" src={pageError} alt="404" />
          <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
          <p className="text-[#2C3E50] mt-2 mb-8 max-w-md mx-auto">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-full bg-[#2d447a] font-semibold text-white shadow-none border-none"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
