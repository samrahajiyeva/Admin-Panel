import React from "react";
import "./Dashboard.scss";
import Chart from "../../components/Chart/Chart";
import Chart2 from "../../components/Chart2/Chart2";
import Chart3 from "../../components/Chart3/Chart3";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <Chart />
        <div style={{display: 'flex' , alignItems: 'center'}}>
          <Chart2 />
          <Chart3 />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
