import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/usePublicAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useSecureAxios";
import { PiSpinnerBallDuotone } from "react-icons/pi";
import useAllUser from "../../hooks/useAllUsers";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const [allUsers] = useAllUser();
  console.log(allUsers)
  const onSubmit = async (userData) => {
    setLoading(true);
    const isPendingUser = allUsers.find((u) => u.phone == userData.phone);
    if (isPendingUser.status === "Pending") {
      setLoading(false)
      return toast.error(
        "You can't not approved for login👊 Please wait for admin approval."
      );
    }
    try {
      const { data } = await axiosPublic.post("/auth/login", userData);
      console.log(data);
      if (data?.token) {
        setLoading(false);
        localStorage.setItem("token", data?.token);
        localStorage.setItem("email", data?.user.email);
        localStorage.setItem("phone", data?.user.phone);
        navigate("/");
      }
    } catch (err) {
      console.log(err.response.data?.error);
      setLoading(false);
      toast.error(err.response.data?.error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-green-600 text-2xl font-bold">Pay Ease</h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("phone")}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="pin"
            >
              PIN
            </label>
            <input
              type="password"
              id="pin"
              placeholder="Enter your 4-digit PIN"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("pin")}
            />
          </div>

          <div className=" mb-6">
            <a
              href="/forgot-pin"
              className="text-gray-500 text-sm hover:underline"
            >
              Forgot PIN?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            {loading ? (
              <PiSpinnerBallDuotone className="m-auto text-xl animate-spin" />
            ) : (
              "Log In"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-green-500 hover:underline font-medium"
            >
              Sign up here
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-400">
            By logging in, you agree to our{" "}
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
