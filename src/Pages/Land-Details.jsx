import React from "react";
import "../CSS/land-details.css"; 
import {Link} from 'react-router-dom'

function LandDetailsForm() {
  return (
    <div className="land-form-box">
      <h2>Land Details</h2>
      <form>
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="cultivation_land">Cultivation Land (in acres)</label>
        <input type="text" id="cultivation_land" name="cultivation_land" required />

        <label htmlFor="non_cultivation_land">Non-Cultivation Land (in acres)</label>
        <input type="text" id="non_cultivation_land" name="non_cultivation_land" required />

        <label htmlFor="crop_land">Sown Land</label>
        <input type="text" id="crop_land" name="crop_land" required />

        <button className='land-btn'type="submit"><Link to='/crop'>Submit</Link></button>

      </form>
    </div>
  );
}

export default LandDetailsForm;
