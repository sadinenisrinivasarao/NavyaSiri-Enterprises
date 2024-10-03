import React, { useEffect } from 'react';
import './Contact.css'; 

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <>
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-info">
          <i className="fas fa-phone-alt"></i>
          <h4>Phone</h4>
          <p>(+91) 9493014601 , (+91) 8886929558</p>
         
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <i className="fas fa-map-marker-alt"></i>
          <h4>Location</h4>
          <p>Aishwarya Nivas F. No. 101,</p>
          <p>Venkatarayanagar, Nizampet, Hyderabad, </p>
          <p>Telangana. 500090</p>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <i className="fas fa-envelope"></i>
          <h4>Email</h4>
          <p>navyasirienterprices@gmail.com</p>
          <p></p>
        </div>
      </div>
    </div>

    </>
  );
};

export default Contact;
