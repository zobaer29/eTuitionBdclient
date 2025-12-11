import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, handlegooglesignin } = useAuth(); // ✅ inside component
  const navigate = useNavigate();

  // Email/password login
  const handlelogin = (data) => {
    signin(data.email, data.password)
      .then((result) => {
        console.log("User logged in:", result.user);
        alert("Login Successful!");
        navigate("/admin"); // Redirect after login
      })
      .catch((error) => {
        console.error(error);
        alert("Login Failed: " + error.message);
      });
  };

  // Google login
  const googlesignin = () => {
    handlegooglesignin()
      .then((result) => {
        console.log("Google user:", result.user);
        alert("Google Sign In Successful!");
        navigate("/admin"); // Redirect after login
      })
      .catch((error) => {
        console.error(error);
        alert("Google Sign In Failed: " + error.message);
      });
  };

  return (
    <div className="flex justify-center p-12">
      <form
        onSubmit={handleSubmit(handlelogin)}
        className="fieldset border-base-300 rounded-box w-xs border p-10 gap-4"
      >
        <h3 className="text-3xl text-center mb-2">Welcome Back</h3>
        <legend className="fieldset-legend justify-center mb-4">
          Please Login
        </legend>

        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="input"
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500">Email is required</p>
        )}

        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", { required: true })}
          className="input"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500">Password is required</p>
        )}

        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Login
        </button>

        <button
          type="button"
          onClick={googlesignin}
          className="btn btn-outline mt-2 w-full justify-center gap-2"
        >
          <FcGoogle /> Sign in with Google
        </button>

        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600 justify-center">
          <p className="m-0">New to eTuitionBd?</p>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-500 underline p-0"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
