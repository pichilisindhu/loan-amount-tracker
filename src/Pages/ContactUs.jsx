import '../CSS/contact.css'
import {Link} from 'react-router-dom'
function ContactUs(){
  return (
    <div>
      <header className='contactus-header'>
        <h1>Contact Us</h1>
      </header>

      <section className="contact">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions, concerns, or feedback, feel free to reach out to us via phone or email. We're here to assist you!
          </p>

          <h3>Phone Numbers:</h3>
          <ul>
            <li>+1 (123) 456-7890</li>
            <li>+1 (987) 654-3210</li>
          </ul>

          <h3>Email:</h3>
          <p>support@farmerwebsite.com</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form method="POST" >
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" className='contact-btn'><Link to='/'>Send Message</Link></button>
          </form>
        </div>
      </section>

      <footer className='contact-footer'> 
        <p>&copy; 2024 Crop-Loan-Tracker | Empowering Farmers</p>
      </footer>
    </div>
  );
};

export default ContactUs;
