import React from 'react';
import WelcomeForm    from './welcomeform';
import Design from './design';

function WelcomeBack() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',marginLeft:'300px',gap:'100px',marginTop:'50px'}}>
      <WelcomeForm/>
      <Design/>
    </div>
  );
}

export default WelcomeBack;
