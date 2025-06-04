import '../CSS/about.css';

function AboutUs() {
  return (
    <div>
      <header className='aboutus'>
        <h1>About Us</h1>
      </header>

      <section className="about">
        <div className="content">
          <h2>Welcome to Crop-Loan-Tracker</h2>
          <p>
            We are dedicated to empowering farmers by providing a platform to manage transactions,
            track government compensations, and access crop loan details. Our goal is to simplify
            financial processes, allowing farmers to focus on farming.
          </p>
        </div>

        <div className="features">
          <h2>What We Do</h2>
          <ul>
            <li>
              <h3>Transaction Management</h3>
              <p>
                Securely store and track your financial transactions. Our platform makes it easy to
                record purchases, sales, and other financial details in one place.
              </p>
            </li>
            <li>
              <h3>Government Compensation Updates</h3>
              <p>
                Get the latest updates on government compensation programs for farmers, whether it's
                for crop loss, natural disasters, or other assistance.
              </p>
            </li>
            <li>
              <h3>Crop Loan Information</h3>
              <p>
                We provide up-to-date information on crop loans, helping you find and understand the
                best financial support options for your farming needs.
              </p>
            </li>
          </ul>
        </div>

        <div className="why-us">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Secure &amp; Reliable: Your transaction details are securely stored in our database.</li>
            <li>Real-Time Information: Stay informed with the latest government programs and loan schemes.</li>
            <li>Farmer-Focused: Our platform is designed specifically for farmers to navigate financial options easily.</li>
          </ul>
        </div>
      </section>

      <footer className='about-footer'>
        <p>&copy; 2024 Crop-Loan-Tracker | Empowering Farmers</p>
      </footer>
    </div>
  );
}

export default AboutUs;
