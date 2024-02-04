import React, { useEffect } from 'react';
import Board from '../components/Board';
import SideBar from '../components/SideBar';
import { useAtom } from 'jotai';
import { userIdAtom } from '../states/User';

const Dashboard = () => {

  const [userId, setUserId] = useAtom(userIdAtom);

  useEffect(() => {
    if (localStorage.getItem('userId')) {
      setUserId(localStorage.getItem('userId'));
    }
  }, []);

  return (
    <div className='flex bg-theme-bg h-screen'>
      <SideBar />
      <Board />
    </div>
  )
}

export default Dashboard