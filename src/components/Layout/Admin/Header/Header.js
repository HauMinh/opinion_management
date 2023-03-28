import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const iconLoading = document.getElementById("loading");
    const showLoading = () => {
      iconLoading.style.display = "flex";
  };
    const logout = () => {
      showLoading();
      setTimeout(() => {
        navigate("/", { replace: true });
        }, 1000);
    };

    return (
        <>
         <div className="loading" id="loading" >
                <img src="https://thumbs.gfycat.com/HighCorruptIsabellineshrike-max-1mb.gif" alt="loading"/>
            </div>
          <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand*/}
            <Link className="navbar-brand ps-3" to='/'>
              ADMIN
            </Link>
            {/* Sidebar Toggle*/}
            <button
              className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 sidebarToggle"
              id="sidebarToggle"
              href="#!"
            >
              <i className="fas fa-bars" />
            </button>
            <span className="ms-auto"></span>
            {/* Navbar*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user fa-fw" />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Activity Log
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button type="button" onClick={logout} className="dropdown-item" >
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </>
    );
}

export default Header;
