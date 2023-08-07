import React from 'react'
import BalanceHeader from './BalanceHeader'
import BalanceChart from './BalanceChart'

const BalanceCard = () => {
  return (
    <div className=' space-y-8 lg:w-1/3 md:w-2/3 w-full p-5'>
      <BalanceHeader/>
      <BalanceChart/>
    </div>
  )
}

export default BalanceCard
