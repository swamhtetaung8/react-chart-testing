import { BarChart,XAxis,Tooltip,Bar,ResponsiveContainer } from 'recharts';
const BalanceChart = () => {
    const data = [
        {
          name: "Mon",
          amount: 17.45,
        },
        {
          name: "Tue",
          amount: 34.91
        },
        {
          name: "Wed",
          amount: 52.36
        },
        {
          name: "Thu",
          amount: 31.07
        },
        {
          name: "Fri",
          amount: 23.39
        },
        {
          name: "Sat",
          amount: 43.28
        },
        {
          name: "Sun",
          amount: 25.48
        }
      ]
  return (
    <div className=' bg-[#FFFCF7] p-5 md:p-8 rounded-3xl'>
      <h1 className=' text-3xl font-medium mb-10'>Spending - Last 7 days</h1>
      
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
            <XAxis axisLine={false} tickLine={false} dataKey="name" />
            <Tooltip />
            <Bar dataKey="amount" fill="#EC755E" />
        </BarChart>
    </ResponsiveContainer>
    <hr className=' my-5' />
    <div className='flex justify-between items-end'>
        <div className=' space-y-2'>
            <p className=' text-gray-500'>Total this month</p>
            <p className=' text-5xl font-bold'>$478.33</p>
        </div>
        <div className=' text-end'>
            <p className=' text-lg font-medium'>+2.4%</p>
            <p className='text-gray-500'>from last month</p>
        </div>
    </div>
    </div>
  )
}

export default BalanceChart
