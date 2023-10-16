import React from 'react'
import {Outlet} from 'react-router-dom';
import Sidebar from '../shared/sidebar';
import Header from'../shared/Header.jsx';
import Dashboard from '../shared/dashboard'
export const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
        <div className='p-4'>
          <div className='flex-1'>
          <Header />
          </div>
        <div className='p-4'>{<Outlet />}</div>
        <Dashboard />
        </div> 
        </div>
  )
}
export default Layout;