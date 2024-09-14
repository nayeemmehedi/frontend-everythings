// src/pages/Unauthorized/Unauthorized.js
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Unauthorized Access</h1>
      <p className="text-lg text-gray-600 mb-8">
        You don't have permission to view this page.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Unauthorized;
