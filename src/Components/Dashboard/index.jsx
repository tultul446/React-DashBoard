import React from 'react'
import TodaysSales from './TodaysSales';
import TopProducts from './TopProducts';
import Earnings from './Earning';
const Dashboard = () => {
  return (
    <div>
     <TodaysSales />
    <TopProducts />
    <Earnings/>
    </div>
  )
}

export default Dashboard;
