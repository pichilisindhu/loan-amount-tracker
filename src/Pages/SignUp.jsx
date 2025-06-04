import '../CSS/signup.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm(){


  return (
    <div className="signup-box">
      <h2>Sign Up</h2>
      <form >
        <div>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@domain.com"
          
            required
          />
         
        </div>

        <div>
          <label htmlFor="firstName">First Name</label><br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
        
            required
          />
        
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label><br />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            
            required
          />
         
        </div>

        <button type="submit" className='signup-btn'><Link to='/'>Sign Up</Link></button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupForm;
