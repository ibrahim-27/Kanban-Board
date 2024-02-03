import React from 'react';
import Board from '../components/Board';
import SideBar from '../components/SideBar';

const Dashboard = () => {
  return (
    <div className='flex bg-theme-bg min-h-screen'>
      <SideBar />
      <Board />
    </div>
  )
}

export default Dashboard