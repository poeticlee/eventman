import React from "react";
import { useForm } from "react-hook-form";
import Button from "./ui-components/button";
import Input from "./ui-components/input";
import Smallinput from "./ui-components/smallInput";
import Checkbox from "./ui-components/checkbox";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://31nc2bs1-3000.euw.devtunnels.ms/auth/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      toast.success("Registration successful!"); // Display success toast
      reset(); // Reset form fields
      clearErrors(); // Clear all errors
    } catch (err) {
      setError("apiError", {
        type: "manual",
        message: err.response?.data?.message || "Something went wrong!",
      });
      toast.error("Registration failed!"); // Display error toast
    }
  };

  return (
    <div>
      <h2>
        Get started with <span style={{ color: "blue" }}>invitrio</span>
      </h2>
      <h5>Bring any celebration to life and make your event unforgettable</h5>

      {errors.apiError && (
        <p style={{ color: "red" }}>{errors.apiError.message}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: "20px" }}>
          <Smallinput
            label="First Name"
            type="text"
            placeholder="Enter your first name"
            {...register("firstName", {
              required: "First name is required.",
            })}
          />
          {errors.firstName && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.firstName.message}
            </p>
          )}

          <Smallinput
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
            {...register("lastName", {
              required: "Last name is required.",
            })}
          />
          {errors.lastName && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.lastName.message}
            </p>
          )}
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.email.message}
          </p>
        )}

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters.",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.password.message}
          </p>
        )}

        <Input
          label="Retype Password"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Please confirm your password.",
            validate: (value) =>
              value === password || "Passwords do not match.",
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.confirmPassword.message}
          </p>
        )}

        <Checkbox
          {...register("termsAgreed", {
            required: "You must agree to the terms and conditions.",
          })}
        />
        {errors.termsAgreed && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.termsAgreed.message}
          </p>
        )}
        <Button label="Sign Up" type="submit" />
      </form>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
        }}
      >
        <hr
          style={{
            border: "none",
            height: "2px",
            backgroundColor: "black",
            flex: "1",
            opacity: "0.1",
          }}
        />
        <p style={{ padding: "10px" }}>Or</p>
        <hr
          style={{
            border: "none",
            height: "2px",
            backgroundColor: "black",
            flex: "1",
            opacity: "0.1",
          }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <img src="/src/assets/googlee.png" alt="Google" />
        <img src="/src/assets/facebook.png" alt="Facebook" />
      </div>

      <p style={{ textAlign: "center" }}>
        Already have an account? <span style={{ color: "blue" }}>Sign in</span>
      </p>

      {/* Add ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
