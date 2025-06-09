import React from 'react'
import ContentHeader from '../ContentHeader'
import { SalesData } from '../../Data/index';
import ChartGraph from '../Chart/Chart';
import WrapperDiv from './WrapperDiv';
const SalesDetails = () => {
  return (
    <div className=' mt-2 ml-2 p-2'>
      <ContentHeader title="Todays Sales" des="Sales summary"/>
   <div className='grid grid-cols-2 md:grid-cols-4 gap-3 px-3 py-5 rounded-md'>
{
SalesData && 
SalesData.map((Data) => {
    return (
        <div key={Data.id} className='bg-primary1 p-4 rounded-md  '>
            <img src={Data.icon} alt={Data.title} className='' />
            <div>
                <p className='text-white/80 text-[15px] md:text-[18px] font-semibold pb-1'>{Data.count}</p>
                <h1 className='text-[10px] md:text-[12px] text-white/80 font-medium'>{Data.title}</h1>
                <p style={{color:Data.color}} className='text-[8px] md:text-[10px] '>{Data.des}</p>
            </div>

        </div>
    )
     
})}
   </div>
   
    </div>
  )
}

const SalesChat = () => {
    return(
        <div className='p-3'>
         <ContentHeader title="Level" />  
         <div className='w-full h-[120px] '>
            <ChartGraph/>
         </div>
         <div className='flex justify-center gap-[20px] lg:gap-0 items-center pt-2 mt-2'>
            <button className= 'flex items-center lg:justify-center text-grayText text-[10px] font-medium lg:border-r border-grayText/30 lg:w-full '>
        <span className='h-2 w-2 rounded-full bg-secondary'></span>Volume
            </button>
            <button className= 'flex items-center lg:justify-center text-grayText text-[10px] font-medium lg:border-r border-grayText/30 lg:w-full '>
        <span className='h-2 w-2 rounded-full bg-secondary'></span>Service
            </button>
         </div>
        </div>
    )
}


const TodaysSales = () => {
    return (
        <div className=''>
            <WrapperDiv>
            <div className ="flex-[1.3] lg:flex-[1.5] bg-primary2  rounded-md  ">
                 <SalesDetails />
            </div>
              <div className="flex-[0.7] lg:flex-[0.5] bg-primary2 rounded-lg  ">
                  <SalesChat />
              </div>
              
            </WrapperDiv>
        </div>
    )

}
export default TodaysSales;