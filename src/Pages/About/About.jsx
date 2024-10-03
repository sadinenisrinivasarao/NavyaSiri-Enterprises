import React, { useState, useEffect } from 'react';
import './About.css';
import image from '../../assets/About.jpg'


const About = () => {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  useEffect(() => {
   
      window.scrollTo(0, 0); 

    const incrementProjects = setInterval(() => {
      setProjectsCompleted((prev) => (prev < 50 ? prev + 10 : 50));
    }, 300);

    const incrementClients = setInterval(() => {
      setHappyClients((prev) => (prev < 100 ? prev + 25 : 100));
    }, 500);


    return () => {
      clearInterval(incrementProjects);
      clearInterval(incrementClients);
    };
  }, []);

  return (
    <section className="about-us">
      <div className="image-container">
        <img src={image} alt="Sanitary Wares" />
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{projectsCompleted.toLocaleString()}</div>
            <p>Project Completed</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">{happyClients.toLocaleString()}</div>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      <div className="text-container">
        <h4>ABOUT US</h4>
        <h2>Navyasiri Enterprises</h2>
        <p>Order in bulk, get wholesale benefits and more</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea itaque tempora facere asperiores rerum sint fugit possimus tenetur expedita similique voluptate cumque, saepe quis perspiciatis laborum deleniti veritatis soluta vel.
        </p>
      </div>
    </section>
  );
};

export default About;
