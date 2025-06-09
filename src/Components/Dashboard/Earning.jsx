import React from 'react'
import ContentHeader from '../ContentHeader'
import MonthlyLineChart from '../../Data/Curve'
import GaugeChart from '../Chart/GaugeChart'
const VisitorInsight = () => {
  return (
    <div className='p-4 h-full'>
      <ContentHeader title='Visitor Insight' />
      <div className='w-full mt-10'>
        <MonthlyLineChart/>

      </div>
    </div>
  )
}

const  EarningsRate = () => {
    return (
       <div className='flex flex-col item-center md:items-start p-4 w-full'>
        <div className='w-full text-center md:text-left'>
        <ContentHeader title='Earnings ' des='Total Expense'/>
        <h1 className='text-[22px] md:text-[24px] lg:text-[26px] text-secondary font-bold'>$6078.76</h1>
        <p className='text-grayText text-[12px] md:text-[1`4px] lg:text-[16px] '>Profit is 48% More than last month</p>
       </div> 
        <div className='w-full flex items-center mx-auto justify-center'>
        <GaugeChart/>
        </div>

       </div>
    )
};

const Earnings = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 pb-4 px-4 lg:gap-x-4 gap-y-4'>
          <div className='bg-primary2 rounded-md min-w-full'>
            <EarningsRate/>
          </div>
          <div className='col-span-2 bg-primary2 rounded-md h-full'>
            <VisitorInsight/>
          </div>
        </div>

    )
}
export default Earnings;