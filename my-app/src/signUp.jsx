import React from "react";
import { useForm } from "react-hook-form";
import Button from "./ui-components/button";

import Checkbox from "./ui-components/checkbox";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PassInput from "./ui-components/passInput";
import "./index.css"; // Or the file where you defined the font-face

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
    clearErrors,
    reset,
  } = useForm({
    mode: "onChange", // Enables dynamic validation updates"
  });

  const password = watch("password"); // Watch password for comparison

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://cors-anywhere.herokuapp.com/https://jobbertrack.onrender.com/auth/signup',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,

        }
      );
console.log(response)
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      toast.success("Registration successful!");
      reset();
      clearErrors();
    } catch (err) {
      setError("apiError", {
        type: "manual",
        message: err.response?.data?.message || "Something went wrong!",
      });
      toast.error("Registration failed!");
    }
  };

  return (
    <div style={{ marginTop: "100px", marginLeft: "50px" }}>
      <img src="/src/assets/logoEvent.png" alt="Logo" />
      <h2>
        Get started with <span style={{ color: "blue" }}>invitrio</span>
      </h2>
      <h5>Bring any celebration to life and make your event unforgettable</h5>

      {errors.apiError && (
        <p style={{ color: "red" }}>{errors.apiError.message}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: "20px", width: "500px" }}>
          <div style={{display:'grid', paddingRight:'30px'}}>
            <label>Firstname</label>
            <input
              style={{
                width: "100%",
                borderRadius: "5px",
                padding: "0.5rem",
                marginBottom: "20px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
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
          </div>
          <div style={{display:'grid'}}>
            <label>Lastname</label>
            <input
              style={{
                width: "100%",
                borderRadius: "5px",
                padding: "0.5rem",
                marginBottom: "20px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
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
        </div>
        <label>Email</label>
        <input
          type="email"
          style={{
            width: "96%",
            borderRadius: "5px",
            padding: "0.5rem",
            marginBottom: "20px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
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

        <PassInput
          label="Password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters.",
            },
            validate: {
              hasNumber: (value) =>
                /[0-9]/.test(value) ||
                "Password must contain at least one number and a special character",
        
              hasSpecialChar: (value) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Password must contain at least one special character",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.password.message}
          </p>
        )}

        <PassInput
          label="Retype Password"
          placeholder="Confirm your password"
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
        <Button
          label="Submit"
          type="submit"
          disabled={!isValid}
          style={{
            backgroundColor: isValid ? "#6460FF" : "gray",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: isValid ? "pointer" : "not-allowed",
          }}
        />
      </form>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "500px",
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
        Already have an account?
        <Link to="/">
          {" "}
          <span style={{ color: "blue" }}>Sign in</span>
        </Link>
      </p>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
