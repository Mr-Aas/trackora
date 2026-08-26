// import React from 'react'
import { Home, Calendar, Settings, ChartColumn, RotateCcwClock } from 'lucide-react';
export default function Taskbar() {
    return (
        <div className='outer bg-slate-800 h-14 flex justify-center items-center absolute w-full bottom-0 pl-4 pr-4'>
            <ul className='flex text-xl text-white w-full justify-between gap-4  '>
                <li className='menu flex flex-col items-center ' >
                    <Home  />
                    <span className='text-sm'>Home</span>
                    </li>
                <li className='menu  flex flex-col items-center' >
                    <Calendar />
                    <span  className='text-sm'>Calendar</span>
                </li>

                <li className='menu  flex flex-col items-center' >
                    <RotateCcwClock />
                    <span className='text-sm'>History</span>
                    </li>

                <li className='menu  flex flex-col items-center' >
                    <ChartColumn />
                    <span className='text-sm'>Report</span>
                    </li>
                <li className='  flex flex-col items-center' >
                    <Settings />
                    <span className='text-sm'>Setting</span>
                    </li>

            </ul>
        </div>
    )
}
