import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { FaUserFriends, FaUserPlus, FaStopCircle, FaFolder } from "react-icons/fa";
import PieCatoChart from '../components/PieCatoChart';
import SalesTrendChart from '../components/SalesTrend';
import UserTable from '../components/UserTable';
import UserGrowLine from '../components/UserGrowLine';
import UserDemoPie from '../components/UserDemoPie';

const UsersPage = () => {
  return (
    <div className='flex-auto overflow-auto relative z-10'>
            <Header title='Users Page' />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
                    <Card name="User Count" icon={FaUserFriends} value={<span className="text-xl">231</span>} />
                    <Card name="Today User Count" icon={FaFolder} value={<span className="text-xl">12</span>} />
                    <Card name="Retention Rate" icon={FaStopCircle} value={<span className="text-xl">21.2%</span>} />
                    <Card name="New Users" icon={FaUserPlus} value={<span className="text-xl">9</span>} />
                </div>
                <div className='grid grid-cols-1 gap-8'>
                    <UserTable />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-1'>
                    <UserGrowLine />
                    <UserDemoPie />

                </div>
                <div className='grid grid-cols-1 gap-8'>
                    
                </div>

            </main>
        </div >

  )
}

export default UsersPage
