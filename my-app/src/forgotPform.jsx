import React from "react";
import { useForm } from "react-hook-form";
//import Input from "./ui-components/input"; 
import Button from "./ui-components/button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";


const ForgotPform = ( disabled) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Call the reset password API
      const response = await axios.post("http://example.com/api/reset-password", {
        email: data.email,
      });

      if (response.status === 200) {
        toast.success("Password reset link has been sent to your email.");
      } else {
        throw new Error("Unexpected response from the server.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to send password reset link. Please try again."
      );
    }
  };

  return (
    <div style={{width:'500px' , padding: '0.5px' ,marginTop:'200px'}}>
    <img src="/src/assets/logoEvent.png" alt="Logo" />
      <h2>Forgot Password?</h2>
      <h5 style={{opacity:'0.5'}}>Dont worry,it happens,Enter your email<br/> and we can help you reset it
        in no time.
      </h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{width:'96%',borderRadius: '5px',padding: '0.5rem',marginBottom:"20px",
            fontSize: '1rem', cursor: disabled ? 'not-allowed' : 'pointer',

          }}
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
        {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>}

        <Button label="Reset Password" type="submit" />

        <p style={{textAlign:'center'}}>
        &larr; Back to <a  style={{ color: "blue" }}><Link to='/login'><span>Sign In</span></Link></a>
        </p>
      </form>

      

      {/* Add ToastContainer */}
      <ToastContainer />
    </div>
  );
};

export default ForgotPform;
