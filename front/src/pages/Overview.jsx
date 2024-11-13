import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import { FaDollarSign, FaShoppingBag, FaUser, FaChartBar } from "react-icons/fa";
import SalesLineChart from '../components/SalesLineChart';
import PieCatoChart from '../components/PieCatoChart';
import BarchartOverview from '../components/BarChartOverview';

const Overview = () => {
  return (
    <div className='flex-auto overflow-auto relative'>
      <Header title='Overview' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
          <Card name="Total Sales" icon={FaDollarSign} value="$12,212" />
          <Card name="Total Products" icon={FaShoppingBag} value="231" />
          <Card name="New Users" icon={FaUser} value="32" />
          <Card name="Percent" icon={FaChartBar} value="2.1%" />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesLineChart />
          <PieCatoChart />
          <BarchartOverview />
        </div>

      </main>
    </div>
  );
};

export default Overview;
