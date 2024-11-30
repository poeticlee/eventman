import React, { forwardRef } from 'react';

const Checkbox = forwardRef(({...props }, ref) => {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="checkbox"
        id="customCheckbox"
        name={name}
        ref={ref} // Forward the ref to the input
        {...props} // Spread additional props, such as validation
      />
      <label htmlFor="customCheckbox">
        <p>
          I agree to <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;