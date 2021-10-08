import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => ( 

<div class="pos-f-t">
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
    <h5 class="text-white h4"><Link to="#" className="links">Home</Link></h5>
    <h5 class="text-white h4"><Link to="#" className="links">About</Link></h5>
    <h5 class="text-white h4"><span class="strong-text"><Link to="#" className="links">Shop</Link></span></h5> <br/>
    <h5 class="text-white h4"><Link to="#" className="links"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-person-badge" viewBox="0 0 16 16"><path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
        </svg> Login</Link> </h5>

    </div>
  </div>    
</div>
  );



export default Navbar