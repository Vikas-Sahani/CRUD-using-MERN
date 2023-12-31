import React from "react";
import { NavLink } from "react-router-dom";
import crudLogo from "../Assets/crud.png";

const Navbaar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light" to="/">
            <div className="logoImg rounded-pill">
              <img src={crudLogo} alt="CRUD Logo" className="rounded-pill" />
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item rounded bg-dark mx-3">
                <a
                  className="nav-link active text-light fs-4"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item rounded bg-dark mx-3">
                <a
                  className="nav-link active text-light fs-4"
                  aria-current="page"
                  href="https://resume-of-vikas.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* rel="noreferrer" was added because security error is showing by the vsCode */}
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className=" btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
