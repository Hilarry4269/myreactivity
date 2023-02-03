import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-uppercase">About Us</h3>
            <p className="text-muted">
              We are a team of passionate cooks who have come together to create
              this recipe website. Our goal is to share our love for cooking and
              provide delicious recipes for everyone to enjoy.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="text-uppercase">Contact Us</h3>
            <ul className="list-unstyled text-muted">
              <li>Email: info@example.com</li>
              <li>Phone: 555-555-5555</li>
              <li>Address: 123 Example St, PH.</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-uppercase">Follow Us</h3>
            <ul className="list-unstyled d-flex justify-content-between">
              <li>
                <a href="#">
                  <i className="fab fa-facebook fa-2x mx-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fa-2x mx-2"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram fa-2x mx-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
