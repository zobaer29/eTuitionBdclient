import React from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout failed",
          text: error.message,
        });
      });
  };

  const isAdmin = user?.email === "admin@example.com";

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-base-200 shadow-lg hidden lg:block">
        <ul className="menu p-4 w-full min-h-full">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Users</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          {user && (
            <li className="mt-auto">
              <button
                onClick={handleLogout}
                className="btn btn-outline w-full mt-4"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Drawer */}
      <div className="drawer lg:hidden">
        <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-4">
          <label htmlFor="mobile-drawer" className="btn btn-primary mb-4">
            Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-base-200 min-h-full">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Users</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {user && (
              <li className="mt-auto">
                <button
                  onClick={handleLogout}
                  className="btn btn-outline w-full mt-4"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Page content wrapper to leave space for fixed sidebar */}
      <div className="flex-1 lg:ml-64 p-4">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
