import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { FaHandLizard, FaProductHunt, FaSignal, FaMoneyCheckAlt } from "react-icons/fa";
import PieCatoChart from '../components/PieCatoChart';
import SalesTrendChart from '../components/SalesTrend';
import ProductTable from '../components/ProductTable';

const ProductsPage = () => {
    return (
        <div className='flex-auto overflow-auto relative z-10'>
            <Header title='Products Page' />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
                    <Card name="Total Products" icon={FaProductHunt} value={<span className="text-xl">231</span>} />
                    <Card name="Top Selling" icon={FaSignal} value={<span className="text-xl">Long sleeve shirt</span>} />
                    <Card name="Low Stocks" icon={FaHandLizard} value={<span className="text-xl">Electronics</span>} />
                    <Card name="Total Spend" icon={FaMoneyCheckAlt} value={<span className="text-xl">$541,123</span>} />
                </div>
                <div className='grid grid-cols-1 gap-8'>
                    <ProductTable />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <SalesTrendChart />
                    <PieCatoChart />

                </div>


            </main>
        </div >

    )
};

export default ProductsPage
