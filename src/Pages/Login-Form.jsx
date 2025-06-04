import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/login-form.css';

function LoginForm() {
return (
    <div className="login-box">
      <h2>Login</h2>
      <form >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
       

          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
     
         
          required
        />

        <div className="checkbox-group">
          <input
            type="checkbox"
            id="remember"
          
           
       
          />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <button type="submit"  className='login-btn'><Link to='/'>Login</Link></button>

        <Link to="/">Forgot Password?</Link>
      </form>
    </div>
  );
}

export default LoginForm;
