import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Input from './ui-components/input';
import Button from './ui-components/button';
import { Link } from 'react-router-dom';

//import { useNavigate } from 'react-router-dom';


const WelcomeForm = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [loading, setLoading] = useState(false);
 // const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post ("https://jsonplaceholder.typicode.com/posts", {
        email: data.email,
        password: data.password,
      });

      // Simulate a successful login response (replace with actual backend logic)
      if (response.status === 201) {
        // Simulating successful login by redirecting to the dashboard
        localStorage.setItem('user', JSON.stringify(data.email)); // Store user info
      //  navigate('/dashboard'); // Redirect to dashboard
        alert('Login Successful');
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
    <div style={{ padding: '0.5px' }}>
      <img src="/src/assets/logoEvent.png" alt="Logo" />
      <h2 style={{ marginBottom: "1rem" }}> Welcome back to <span style={{color:"blue"}}>invitrio</span></h2>
      <h5 style={{opacity:'0.5'}}> Bring any celebration to life and make<br/> your event unforgettable</h5>
      <div style={{ width: '400px', margin: 'auto', textAlign: 'center' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email:</label><br />
            <Input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter your email"
              style={{ padding: '8px', width: '100%' }}
            />
            {errors.email &&<p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>}
          </div>

          <div>
            <label>Password:</label><br />
            <Input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              style={{ padding: '8px', width: '100%' }}
            />
            {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</p>}
          </div>

          <p style={{display:"flex" ,justifyContent:"flex-end"}}>Forgot Password?</p>

          <Button label={loading ? "Loading..." : "Sign in"} type="submit" disabled={loading} />

          {errors.submit && <p style={{ color: "red", fontSize: "12px" }}>{errors.submit.message}</p>}
        </form>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
          <hr style={{ border: "none", height: "2px", backgroundColor: "black", flex: '1', opacity: '0.1' }} /> 
          <p style={{ padding: '10px' }}>Or</p>
          <hr style={{ border: "none", height: "2px", backgroundColor: "black", flex: '1', opacity: '0.1' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <img src="/src/assets/googlee.png" alt="Google" />
          <img src="/src/assets/facebook.png" alt="Facebook" />
        </div>

        
        <p>
          Dont you have an  account yet?<a href="/register" style={{ color: "blue" }}><span>Sign up</span></a>
        </p>
      </div>
    </div>
  );
};

export default WelcomeForm;
