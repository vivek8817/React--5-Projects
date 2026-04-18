import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-52 bg-gray-800 p-4 min-h-screen">
      <nav className="space-y-6 ">

        <NavLink className="text-white" to="/" >Home
        </NavLink>

        <NavLink to="/dashboard" className="block">
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/profile" className="block">
          Profile
        </NavLink>

        <NavLink to="/dashboard/settings" className="block">
          Settings
        </NavLink>

        <NavLink to="/login" className="block">
          Login
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
