import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registeruser, handlegooglesignin } = useAuth(); // ✅ include Google
  const navigate = useNavigate();

  const handleRegistration = (data) => {
    registeruser(data.email, data.password)
      .then((result) => {
        console.log("Registered user:", result.user);
        alert("Registration Successful");
        navigate("/admin"); // redirect after registration
      })
      .catch((error) => {
        console.error(error);
        alert("Registration Failed: " + error.message);
      });
  };

  const handleGoogleSignUp = () => {
    handlegooglesignin()
      .then((result) => {
        console.log("Google user:", result.user);
        alert("Google Sign-Up Successful");
        navigate("/admin");
      })
      .catch((error) => {
        console.error(error);
        alert("Google Sign-Up Failed: " + error.message);
      });
  };

  return (
    <div className="flex justify-center p-12">
      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <h2 className="text-center text-3xl">Register</h2>

        <label className="label">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="input"
          placeholder="Email"
        />
        {errors.email?.type === "required" && (
          <p className="text-red-500">Email Address is required</p>
        )}

        <label className="label">Password</label>
        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 8,
            pattern:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          })}
          className="input"
          placeholder="Password"
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500">Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500">
            Password must be at least 8 characters long
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500">
            Password must include letters, numbers, and a special character
          </p>
        )}

        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Register
        </button>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="btn btn-outline mt-2 w-full justify-center gap-2"
        >
          <FcGoogle /> Sign up with Google
        </button>

        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600 justify-center">
          <p className="m-0">Already have an account?</p>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-blue-500 underline p-0"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
