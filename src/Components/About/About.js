import React from "react";
import abtUs from "../../images/us.png";
import "./About.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="nil">
        <div>
          <h1>Nil Desperandum</h1>
          {/* <p>
            We are Wonkers! The deliciously sweets and treats e-commerce! This
            is our 2nd project for our Web Dev Bootcamp at Ironhack
          </p> */}
          <img src={abtUs} alt="é nois" />
          <p>Oompa Loompas are on the way to fix this 404.</p>
          <Link to='/'>
            <p>
              <strong>Go Back Home</strong>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
