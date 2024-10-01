import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styles

const Footer = () => {
  return (
    <section className="container footer-container " id="contact">
      <div className="container-title">
        <h2>Contact</h2>
      </div>
      <div className="contact-section  container-items">
        <div className="contact-left ">
          <h2 className="text-effect">Let's start our business</h2>
          <h4>Order in bulk, get wholesale benefits and more</h4>
          <div className="contact-details ">
            <div className="contact-detail ">
              <i className="fa-solid fa-envelope"></i>
              <p>navyasirienterprices@gmail.com</p>
              
            </div>
            <div className="contact-detail ">
              <i className="fa-solid fa-phone"></i>
              <p>9493014601 , 8886929558</p>
            </div>
            <div className="contact-detail ">
              <i className="fa-solid fa-location-dot"></i>
              <p>Aishwarya Nivas F. No. 101, Venkatarayanagar, Nizampet, Hyderabad - 500090</p>
            </div>
          </div>
        </div>
        <form
          action="https://formspree.io/f/xblrvdop"  // need to change the url
          method="POST"
          className="contact-right "
          id="contact-right"
        >
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Enter a message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Leave a message"
            required
          ></textarea>

          

          <button type="submit" className="srinivas-animation">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Footer;
