import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signUp"); // Navigates to the "/signUp" route
  };
  const handleLogin = () => {
    navigate("/login"); // Navigates to the "/signUp" route
  };
  return (
    <div>
      <div>
        <img src="/src/assets/Group 740.png" alt="Logo" />
        <div>
          <button onClick={handleSignUp}> Sign Up</button>

          <button onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
}
