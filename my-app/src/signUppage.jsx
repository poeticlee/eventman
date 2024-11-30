import React from 'react';
import SignUp from './signUp';
import Design from './design'

function SignUppage() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',margin:'30px 0px 0px 200px',gap:'100px'}}>
      <SignUp  />
      <Design/>
    </div>
  );
}

export default SignUppage;