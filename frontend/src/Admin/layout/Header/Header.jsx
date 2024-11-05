import React from "react";
import "./Header.scss";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <div className="header">
        {/* <div className="header__left">
          <h1>Logo</h1>
        </div> */}
        <div className="header__middle">
          <nav class="navbar navbar-light bg-light">
            <form class="form-inline search" style={{display: 'flex' , gap: '5px'}}>
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button style={{display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                <FaSearch />
              </button>
            </form>
          </nav>
        </div>
        <div className="header__right">
          <div className="header__right__user">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2393"
              alt="admin"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
