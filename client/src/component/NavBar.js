import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">EZ-IT-PROJECT</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/school-info">School Info</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/student-info">Student Info</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/registration">Registration</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/newsletter">NewsLetter</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/donations">Donations</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
