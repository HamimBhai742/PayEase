import { image } from "framer-motion/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { imgUpload } from "../../Components/ImageUpload";
import useAxiosPublic from "../../hooks/usePublicAxios";

const SignUpPage = () => {
  const [image, setImage] = useState(null);
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    console.log("Form Data: ", data);
    const img = { image: data.image[0] };
    console.log(img);
    const imageF = await imgUpload(img);
    console.log(imageF);
      const { email, phone, role, pin,name } = data
      const userData = {
          email,phone,role,pin,image:imageF,name
      }
      console.log(userData)
    try {
        const { data } = await axiosPublic.post("/auth/register", userData);
        console.log(data)
    } catch (err) {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
          Create an Account
        </h2>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Phone Field */}
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
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^01[3,4,9,6,7,5][0-9]{9}$/,
                  message:
                    "Invalid BD phone number. Must start with 01 and be 11 digits",
                },
              })}
              placeholder="Enter your mobile number"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          {/* Role Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              {...register("role", { required: "Role is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.role ? "border-red-500" : ""
              }`}
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="agent">Agent</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

          {/* PIN Field */}
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
              {...register("pin", {
                required: "PIN is required",
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: "PIN must be a 4-digit number",
                },
              })}
              placeholder="Enter a 4-digit PIN"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                errors.pin ? "border-red-500" : ""
              }`}
            />
            {errors.pin && (
              <p className="text-red-500 text-sm">{errors.pin.message}</p>
            )}
          </div>

          {/* Choose Image Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="image"
            >
              Choose Profile Picture
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              {...register("image", {
                required: "Profile picture is required",
              })}
              className="block w-full text-sm text-gray-500 border rounded-lg cursor-pointer focus:outline-none"
            />
            {image && (
              <div className="mt-4 text-center">
                <img
                  src={image}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full mx-auto shadow-lg"
                />
              </div>
            )}
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-pink-500 hover:underline font-medium"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
