import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeBack from './welcomeBack';
import SignUppage from './signUppage';
import ForgotP from './forgotP';

import PassReset2 from './passReset2';
import Setnewpass from './setnewpass'
import DashBoard from './dashBoard'
import Landingpage from './landingpage';
import SelectCategory from './selectCategory';





function App() {

 
  return (
    <div>

   
   
    

    
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/login" element={<WelcomeBack/>} />
        <Route path="/about" element={<SignUppage />} />
        <Route path="/signUp" element={<SignUppage />} />
        <Route path="/forgot-password" element={<ForgotP />} /> {/* Route for ForgotP */}
        <Route path='/passReset2' element={<PassReset2/>} />
        <Route path='/setnewpass' element={<Setnewpass/>} />
        <Route path='/dashBoard' element={<DashBoard/>} />
        <Route path='/landingpage' element={<Landingpage/>} />
        <Route path='/selectCategory' element={<SelectCategory/>} />

      </Routes>
    </div>
    
  );
}

export default App;
