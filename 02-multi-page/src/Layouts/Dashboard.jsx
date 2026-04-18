import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <main className="flex-1 p-6">

        <header className="mb-6 border-b pb-2">
          <h1 className="text-xl font-semibold">
            Dashboard
          </h1>
        </header>

        <Outlet />

      </main>

    </div>
  )
}

export default Dashboard