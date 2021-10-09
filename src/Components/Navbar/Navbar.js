import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => (
  <div className="pos-f-t">
    <nav className="navbar navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <h5 className="text-white h4">Home</h5>
        <h5 className="text-white h4">About</h5>
        <h5 className="text-white h4">
          <span className="strong-text">Shop</span>
        </h5>{" "}
        <br />
        <h5 className="text-white h4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className="bi bi-person-badge"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
          </svg>{" "}
          Login{" "}
        </h5>
      </div>
    </div>
  </div>
);

export default Navbar;
