import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold mb-4">
        Dashboard
      </h1>

      <p>Welcome {user?.name}</p>

      <img
        src={user?.avatar}
        alt="avatar"
        className="w-16 h-16 rounded-full mt-4"
      />

    </div>
  );
};

export default Dashboard;
