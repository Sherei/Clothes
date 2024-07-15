import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./navbar.css"

const Navbar = () => {
  return <>
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">
          <img src="logo.png" alt="" />
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Men's
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Women's
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Kids
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                On Sale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Brands
              </a>
            </li>
            <form className="d-flex mx-5 navbar_Search" style={{position:"relative"}}>
              <input
                className="me-2 "
                type="search"
                placeholder="Search Anything"
                aria-label="Search"
              />
              <span   className="search_icon">
              <CiSearch/>

              </span>
            </form>
          </ul>

        </div>
      </div>
    </nav>

  </>
}

export default Navbar