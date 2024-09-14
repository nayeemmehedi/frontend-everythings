import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, redirect } from "react-router-dom";
import { axiosInstance } from "../../Api/AxiosInstance";
import { apiRequest } from "../../utls/apiRequest";

function Signup() {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "User Name must be at least 6 characters")
      .required("User Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const result = await apiRequest("/register", data);

    if (result.success) {
      alert("Signup successful");
      setTimeout(() => redirect("/login"), 2000);
    } else {
      alert(`Signup failed: ${result.message}`);
    }

    console.log(result.data); // Log the response data
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="w-full max-w-md bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700">User Name</label>
            <input
              type="username"
              {...register("username")}
              className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className={`w-full p-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
