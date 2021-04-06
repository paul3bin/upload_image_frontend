import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const homeRedirect = () => {
    history.push("/");
  };
  const loginRedirect = () => {
    history.push("/login");
  };
  const registerRedirect = () => {
    history.push("/register");
  };
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={homeRedirect}>
          Upload Image
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a
              className="nav-link active "
              aria-current="page"
              href="#"
              onClick={loginRedirect}
            >
              Login
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              onClick={registerRedirect}
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
