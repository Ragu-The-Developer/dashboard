import React from 'react'
import {IoBagHandle} from 'react-icons/io5'
 function DashboardStatsGrid() {
  return (
    <div className='flex gap-10 w-full'>
    <BoxWrapper>
      <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
        <IoBagHandle className='text-2xl text-white'/>
      </div>
      
      <div className='pl-4'>
        <span className='text-sm text-gray-500 font-light'>Total Sales</span>
         <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>$53452.60</strong>
          <span className='text-sm text-green-500 pl-2 '>+343</span>
          </div>
      </div>

    </BoxWrapper>
    
    <BoxWrapper>
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
        <IoBagHandle className='text-2xl text-white'/>
      </div>
      
      <div className='pl-4'>
        <span className='text-sm text-gray-500 font-light'>Total Expenses</span>
         <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>$12130.78</strong>
          <span className='text-sm text-green-500 pl-2 '>+250</span>
          </div>
      </div>

    </BoxWrapper>
    
    <BoxWrapper>
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
        <IoBagHandle className='text-2xl text-white'/>
      </div>
      
      <div className='pl-4'>
        <span className='text-sm text-gray-500 font-light'>Total Customers</span>
         <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>1,21,000</strong>
          <span className='text-sm text-green-500 pl-2 '>+843</span>
          </div>
      </div>
      
    </BoxWrapper>
    
    <BoxWrapper>
    <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
        <IoBagHandle className='text-2xl text-white'/>
      </div>
      
      <div className='pl-4'>
        <span className='text-sm text-gray-500 font-light'>Total Orders</span>
         <div className='flex items-center'>
          <strong className='text-xl text-gray-700 font-semibold'>80,000</strong>
          <span className='text-sm text-green-500 pl-2 '>+243</span>
          </div>
      </div>
    </BoxWrapper>
    </div>
  )
}
export default DashboardStatsGrid;
 
function BoxWrapper({children}) {
  return <div className=' bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}