import React from 'react'
import DashboardStatsGrid from '../components/dashboardstatsgrid'
import TransactionChart from '../components/transactionchart'
import BuyerProfileChart from '../components/buyerprofilechart'
export default function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart />
      <BuyerProfileChart />
      </div>
    </div>
  )
}

