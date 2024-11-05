import React from "react";
import Header from "../../layout/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar/Sidebar";
import "./AdminRoot.scss";

const AdminRoot = () => {
  return (
    <div className="wrap">
      <Sidebar />
      <div className="part">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminRoot;
