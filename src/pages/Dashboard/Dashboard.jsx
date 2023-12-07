import React from "react";
import Board from "../../components/Board/Board";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-100 d-flex align-items-stretch">
      <Sidebar />
      <Board />
    </div>
  );
};

export default Dashboard;
