import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signUp"); 
  };
  const handleLogin = () => {
    navigate("/login"); 
  };
  return (
    <div className="w-screen h-[80px] flex items-center justify-center ">
      <div className="flex items-center justify-between main"  >
        <img src="/src/assets/Group 740.png" alt="Logo" />
        <div>
          <button  onClick={handleSignUp}> Sign Up</button>

          <button  className="bg-[#6460FF] fon" onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </div>
  );
}  
