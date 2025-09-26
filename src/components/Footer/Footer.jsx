import React from "react";
import Container from "../ContainerClass/Container";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import email from "../../assets/email.png";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <div className="footer text-gray-500 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  p-10">
          <nav className="col-span-2">
            <h6 className="font-semibold  text-lg text-white">
              CS — Ticket System
            </h6>

            <p className="md:pr-20">
              We are a simple and powerful platform for managing customer
              support requests. We help businesses track, organize, and resolve
              issues efficiently, ensuring customer satisfaction. Our goal is to
              make support easy, transparent, and effective for both teams and
              customers
            </p>
          </nav>
          <nav>
            <h6 className="font-semibold text-lg text-white">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Saled</a>
          </nav>
          <nav>
            <h6 className="font-semibold text-lg text-white">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 className="font-semibold text-lg text-white">Information</h6>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="font-semibold text-lg text-white">Social Links</h6>
            <div className="flex items-center gap-2">
              <img src={twitter} alt="twitter-icon" />
              <a className="link link-hover">@CS — Ticket System</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={linkedin} alt="linkedin-icon" />
              <a className="link link-hover">@CS — Ticket System</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={facebook} alt="facebook-icon" />
              <a className="link link-hover">@CS — Ticket System</a>
            </div>
            <div className="flex items-center gap-2">
              <img src={email} alt="email-icon" />
              <a className="link link-hover">support@cst.com</a>
            </div>
          </nav>
        </div>
        <hr />
        <div>
          <p className="text-white text-center py-5">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
