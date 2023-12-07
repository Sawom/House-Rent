import React from "react";
import Board from "../Board/Board";
import Sidebar from "../Sidebar/Sidebar";

const SavedProperty = () => {
  return (
    <div className="w-100 d-flex align-items-stretch">
      <Sidebar />
      <Board />
    </div>
  );
};

export default SavedProperty;
