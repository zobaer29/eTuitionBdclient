import React from "react";
import Sidebar from "../../component/adminComponent/Sidebar";
import { Outlet } from "react-router";
const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
