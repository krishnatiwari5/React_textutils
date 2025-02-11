import React, { useState } from 'react';


function Navbar(props) {


    return ( 
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${!(props.mode)}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
TextUtils
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           About
          </a>
        </li>
       </ul>
 
      <form className="d-flex" role="search">
      <div className="form-check form-switch">
  <input className="form-check-input  my-3 mx-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  {/* <label className="form-check-label" for="flexSwitchCheckDefault"></label> */}
</div>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />



        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

     );
}

export default Navbar;