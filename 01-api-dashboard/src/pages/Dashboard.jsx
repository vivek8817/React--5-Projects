import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import StatsSection from '../sections/Statssection'
import UsersSection from '../sections/UserSection'
import ActivitySection from '../sections/Activitysection'

const Dashboard = () => {
  return (
   <div className="h-screen flex flex-col overflow-hidden">
  <Header />
  <div className="flex flex-1 overflow-hidden">
    <Sidebar />
    <main className="flex-1 p-6 flex flex-col gap-y-6 overflow-y-auto">
      <StatsSection />
      <UsersSection />
      <ActivitySection />
    </main>
  </div>
</div>

  );
}

export default Dashboard