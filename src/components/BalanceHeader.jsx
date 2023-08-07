import React from 'react'
import logo from "../assets/logo.svg"
const BalanceHeader = () => {
  return (
    <div className=' rounded-3xl p-5 md:p-7 bg-[#EB765E] flex items-center justify-between'>
      <div className=' space-y-2'>
        <p className=' text-gray-100'>My balance</p>
        <p className=' text-3xl font-medium text-white'>$921.48</p>
      </div>
      <img src={logo} alt="" />
    </div>
  )
}

export default BalanceHeader
