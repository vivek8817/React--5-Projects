import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoutes";
import UserDetails from "./pages/UserDetails";
import Sidebar from "./components/Sidebar";

import Dashboard from "./Layouts/Dashboard";

const App = () => {
  return (
    <div className="flex">
      {/* 
        <Sidebar /> */}

      <main className="flex-1 p-6 flex flex-col gap-y-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />

            <Route path="profile" element={<Profile />} />

            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/user/:id" element={<UserDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
