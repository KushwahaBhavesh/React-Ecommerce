import React, { useState } from "react";
import profile from "../../assets/react.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const navbarLink = [
    { name: "home", to: "/" },
    { name: "product", to: "/product" },
    { name: "category", to: "/category" },
  ];

  return (
    <>
      <div className="container-fliud sticky-top shadow bg-light">
        <header
          className="d-flex justify-content-between align-items-center bg-light  px-5 "
          style={{ height: "4rem", margin: "0 2% 0 6%" }}
        >
          <div className=" d-flex gap-5">
            <h4>
              <Link
                to="/"
                className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
              >
                EazyBuy
              </Link>
            </h4>
          </div>
          <form role="search">
            <div className="form position-relative d-flex">
              <input
                className="form-control me-1 rounded-2 border-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ width: "30rem" }}
              />
              <button
                className="btn position-absolute end-0 p-0 me-3"
                type="submit"
              >
                <i className="bi bi-search fs-4"></i>
              </button>
            </div>
          </form>
          <div className="d-flex gap-3 ">
            <nav className="navbar ">
              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-3">
                {navbarLink.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      className="nav-link px-2 link-warning text-dark text-capitalize "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="d-flex align-items-center gap-3">
              <Link to="/cart" className="nav-link px-2 link-info text-dark">
                <span>
                  <i className="bi bi-cart4 fs-3 " aria-label="cart"></i>
                </span>
              </Link>

              <button type="button" className="btn btn-warning rounded-0 px-4 fs-6"><Link to='/login' className="text-dark link-underline link-underline-opacity-0 link-offset-3 ">Login</Link></button>


              {/* <div className="p-1 rounded-circle border border-warning">
                <img loading="lazy" 
                  src={profile}
                  className="rounded float-end dropdown-toggle"
                  alt="profile"
                  style={{ height: "25px" }}
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
