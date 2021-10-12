import React, { useState } from "react";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import Subscribe from "./Subscribe.js";
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const handleInputEmail = (newSub) => {
    setEmail([...email, newSub]);
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <Subscribe inputMail={handleInputEmail} />
        <div>
          <h4>Legal</h4>
          <div className="centered pe">
            <p>
              <Link to="#" className="links">
                Cookies
              </Link>
            </p>

            <p>
              <Link to="#" className="links">
                Privacy
              </Link>
            </p>

            <p>
              <Link to="#" className="links">
                Terms of Use
              </Link>
            </p>
          
          </div>
        </div>

        <div>
          <h4>Useful</h4>
          <div className="centered pe">
            <p>
              <Link to="#" className="links">
                Acessibility
              </Link>
            </p>

            <p>
              <Link to="#" className="links">
                FAQ
              </Link>
            </p>

            <p>
              <Link to="/aboutus" className="links">
                Contact
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h4>Info</h4>
          <div className="centered pe">
            <p>
              <Link to="#" className="links">
                Refund Policy
              </Link>
            </p>

            <p>
              <Link to="#" className="links">
                Shipping Policy
              </Link>
            </p>
          </div>
        </div>

        {/* <div>
          <h4>Contact</h4>
          <div className="centered pe">
            <p>
              <i className="bi bi-house-fill"></i>Loompaland
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i>
              wonkalicious@wonka.com
            </p>
          </div>
        </div> */}
      </div>

      <div className="ltd">
        <p>© Wonka Ltd. - All Rights Reserved</p>
        <div className="social">
          <Link to="#">
            <i className="bi bi-google" style={{ fontSize: "1.1em" }}></i>
          </Link>
          &emsp;
          <Link
            to={{ pathname: "https://github.com/HinaLiao/project-2" }}
            target="_blank"
          >
            <i className="bi bi-github" style={{ fontSize: "1.1em" }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;