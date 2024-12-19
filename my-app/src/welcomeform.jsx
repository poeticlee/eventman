import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//import Input from "./ui-components/input";
import PassInput from "./ui-components/passInput";
import Button from "./ui-components/button";
import { Link, useNavigate } from "react-router-dom";

const WelcomeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://jobbertrack.onrender.com/auth/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(data.email));

        // Navigate to the dashboard page
        navigate("/dashBoard");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError("submit", {
        type: "manual",
        message: "Invalid credentials. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "0.5px", marginTop: "40px" }}>
      <img src="/src/assets/logoEvent.png" alt="Logo" />
      <p
        style={{
          marginBottom: "1rem",
          fontFamily: "Manrope",
          fontOpticalSizing: "auto",
          fontWeight: "600",
          fontStyle: "normal",
          fontSize: "28px",
          color: "#292929",
        }}
      >
        Welcome back to &nbsp;
        <span
          style={{
            color: "blue",
            fontFamily: "Manrope",
            fontOpticalSizing: "auto",
            fontWeight: "600",
            fontStyle: "normal",
            fontSize: "28px",
          }}
        >
          invitrio
        </span>
      </p>
      <h5
        style={{
          opacity: "0.5",
          fontFamily: "Manrope",
          fontOpticalSizing: "auto",
          fontWeight: "600",
          fontStyle: "normal",
          color: "#292929",
        }}
      >
        Sign in to manage your events and track RSVPs
        <br /> and keep the celebration going!
      </h5>
      <div style={{ width: "400px", margin: "auto", }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email:</label>
            <br />
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label>Password:</label>
            <br />
            <PassInput
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {errors.password.message}
              </p>
            )}
          </div>

          <p style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              to="/forgot-password"
              style={{ textDecoration: "none", color: "blue" }}
            >
              Forgot Password?
            </Link>
          </p>

          <Button
            label={loading ? "Loading..." : "Sign in"}
            type="submit"
            disabled={loading}
          />

          {errors.submit && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.submit.message}
            </p>
          )}
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

        <p>
          Don’t have an account yet?{" "}
          <Link to="/signUp" style={{ textDecoration: "none", color: "blue" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default WelcomeForm;
