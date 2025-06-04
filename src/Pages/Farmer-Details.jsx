import React, { useState } from "react";
import {Link} from 'react-router-dom';


import "../CSS/farmer-registration.css";


function FarmerRegistrationForm() {
   return (
    <>
    <h2 className='farmer-header'>Farmer Registration</h2>
    <div className="farmer-form-box">
      
      <form >
        <label htmlFor="farmer_name">Farmer Name</label>
        <input type="text" id="farmer_name" name="farmer_name" required />

        <label htmlFor="father_name">Father's Name</label>
        <input type="text"
          id="father_name"
          name="father_name"
          
          required
        />

        <label htmlFor="mother_name">Mother's Name</label>
        <input
          type="text"
          id="mother_name"
          name="mother_name"
          
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
         
          required
        />

        <label htmlFor="house_no">House No</label>
        <input
          type="text"
          id="house_no"
          name="house_no"
          
          required
        />

        <label htmlFor="village_name">Village Name</label>
        <input
          type="text"
          id="village_name"
          name="village_name"
          
          required
        />

        <label htmlFor="post">Post</label>
        <input
          type="text"
          id="post"
          name="post"
          
          required
        />

        <label htmlFor="mandal">Mandal</label>
        <input
          type="text"
          id="mandal"
          name="mandal"
          
          required
        />

        <label htmlFor="district">District</label>
        <input
          type="text"
          id="district"
          name="district"
          
          required
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          
          required
        />

        <button className="btn" type="submit"><Link to='/land'>Submit</Link></button>
      </form>
    </div>
    </>
  );
}

export default FarmerRegistrationForm;
