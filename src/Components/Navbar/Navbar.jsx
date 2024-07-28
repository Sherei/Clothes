import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import "./navbar.css"

const Navbar = () => {
  return <>
    <>
      <nav className="navbar navbar-expand-lg navbar-light  px-lg-5 px-sm-3" style={{ backgroundColor: "#F2F0F1" }}>
        <div className="container-fluid">
          <div>
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
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
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
                    <a className="dropdown-item" href="/products">
                      Clothes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products">
                      Shoes
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className='d-flex fs-3 nav_display'>
              <div className=''>
                <a
                  className="nav-link"
                  href="/"
                ><BsCart /></a>
              </div>
              <div className=''>
                <a
                  className="nav-link"
                  href="/login"
                ><CgProfile /></a>
              </div>
            </div>
          </div>
          <div className='fs-3 d-lg-none d-block'>
          <a className="navbar-brand" href="#">
              <CgProfile/>
            </a>
            <a className="navbar-brand" href="#">
              <BsCart />
            </a>
          </div>  
        </div>
      </nav>

    </>

  </>
}

export default Navbar