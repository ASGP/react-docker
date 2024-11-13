import React from 'react';
import { FaChartLine, FaCircleNotch, FaFileInvoiceDollar, FaShoppingBasket } from 'react-icons/fa';
import UserTable from '../components/UserTable';
import UserGrowLine from '../components/UserGrowLine';
import UserDemoPie from '../components/UserDemoPie';
import Header from '../components/Header';
import Card from '../components/Card';
import SalesBar from '../components/SalesBar';
import SalesArea from '../components/SalesArea';

const Sales = () => {
  return (
    <div className='flex-auto overflow-auto relative z-10'>
    <Header title='Sales Page' />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
            <Card name="Total Sales" icon={FaFileInvoiceDollar} value={<span className="text-xl">$432,123</span>} />
            <Card name="Average Sale" icon={FaShoppingBasket} value={<span className="text-xl">$45</span>} />
            <Card name="Processing Sales" icon={FaCircleNotch} value={<span className="text-xl">21</span>} />
            <Card name="Sales Growth" icon={FaChartLine} value={<span className="text-xl">12.2%</span>} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-1'>
        
            <SalesArea />
            <SalesBar/>

        </div>
        <div className='grid grid-cols-1 gap-'>
            
        </div>

    </main>
</div >
  )
}

export default Sales
