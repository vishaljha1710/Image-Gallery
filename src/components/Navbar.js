import React from "react";

export default function Navbar() {
  const handleResetPage = () => {
    localStorage.clear(); // Clears the local storage
    window.location.reload(); // Reloads the page
  };

  return (
    <div>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <span
            style={{ cursor: "pointer" }}
            className="navbar-brand"
            onClick={handleResetPage}
          >
            Reset Page
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"><a href="https://github.com/vishaljha1710" style={{textDecoration:'none'}}>Visit my github</a></ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
