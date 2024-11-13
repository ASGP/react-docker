import React from 'react';
import { FaChartLine, FaCheckCircle, FaClock,  FaShoppingBag, FaTimesCircle} from 'react-icons/fa';
import Header from '../components/Header';
import Card from '../components/Card';
import SalesBar from '../components/SalesBar';
import OrdersLineChart from '../components/OrdersLineChart';
import OrdersTable from '../components/OrdersTable';

const Orders = () => {
  return (
    <div className='flex-auto overflow-auto relative z-10'>
    <Header title='Orders Page' />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
            <Card name="Total Orders" icon={FaShoppingBag} value={<span className="text-xl">123</span>} />
            <Card name="Pending Orders" icon={FaClock} value={<span className="text-xl">45</span>} />
            <Card name="Completed Orders" icon={FaCheckCircle} value={<span className="text-xl">61</span>} />
            <Card name="Cancelled Orders" icon={FaTimesCircle} value={<span className="text-xl">12.2%</span>} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-1'>
        
            <OrdersLineChart />
            <SalesBar/>

        </div>
        <div className='grid grid-cols-1 gap-8'>
        <OrdersTable/>
        </div>

    </main>
</div >
  )
}

export default Orders
