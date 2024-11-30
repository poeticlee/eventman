import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeBack from './welcomeBack';
import SignUppage from './signUppage';
import DashBoard from './dashBoard';

function App() {
  return (
    <div>
      <WelcomeBack/>

      <Routes>
        <Route path="/" element={<WelcomeBack/>} />
        <Route path="/about" element={<SignUppage/>} />
        <Route path="/contact" element={<DashBoard/>} />
      </Routes>
    </div>
  );
}

export default App;
