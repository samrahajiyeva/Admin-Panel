import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar ">
        <div className="sidebar__top">
          <h1 className="nerko-one-regular logo">Greenland</h1>
        </div>
        <div className="sidebar__bottom">
          <ul className="sidebar__bottom__list">
            <li>
              <AiFillDashboard />
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <IoAddCircleSharp />
              <Link to="/add">Add</Link>
            </li>
            <li>
              <FaDatabase />
              <Link to="/data">Data</Link>
            </li>
            <li>
              <RiAdminFill />
              <Link to="/acc">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
