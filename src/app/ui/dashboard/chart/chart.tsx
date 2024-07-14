'use client'
import { TbBackground } from 'react-icons/tb';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {

  const data = [
    {
      name: 'Sun',
      visit: 4000,
      click: 2400,    
    },
    {
      name: 'Mon',
      visit: 3000,
      click: 1398,      
    },
    {
      name: 'Tue',
      visit: 2000,
      click: 3800,
    },
    {
      name: 'Wed',
      visit: 1890,
      click: 4800,
    },
    {
      name: 'Thu',
      visit: 3000,
      click: 1398,
    },
    {
      name: 'Fri',
      visit: 2390,
      click: 3000,
    },
    {
      name: 'Sat',
      visit: 3490,
      click: 4300,
    },
  ];

  return (
    <section className="chart flex flex-col bg-slate-800 rounded-md p-3 ">
      <header>
        <h2 className="mb-3 font-medium text-slate-400">Charts</h2>
      </header>
      <div className='flex h-96'>
        <ResponsiveContainer width="100%" height="80%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip contentStyle={{background: "#151c2c", border:"none", borderRadius:".7rem"}}/>
              <Legend />
              <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="click" stroke="#82ca9d"  strokeDasharray="3 4 5 2"/>
            </LineChart>
          </ResponsiveContainer>
        </div>  
    </section>       
    
  )
}

export default Chart