import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import "./navbar.css"

const Navbar = () => {
  return <>
    <div className="container-fluid px-lg-5 px-md-5 px-sm-3">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className='row d-flex align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-6 d-flex border'>
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
              <img src="logo.png" alt="" />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/products"
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
                        Men's
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/products">
                        Women's
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/products">
                        Kids
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/products">
                    On Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/products">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/products">
                    Brands
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 d-none d-lg-block border'>
            <form className="d-flex mx-5 navbar_Search" style={{ position: "relative" }}>
              <input
                className="me-2 "
                type="search"
                placeholder="Search Anything"
                aria-label="Search"
              />
              <span className="search_icon">
                <CiSearch />

              </span>
            </form>

          </div>
            <div className='col-lg-2 col-md-6 col-sm-6 border'>
              <div className='d-flex gap-3'>
                <CiSearch />
                <CgProfile />
                <BsCart />
              </div>
            </div>
        </div>
      </nav>
    </div>
  </>
}

export default Navbar