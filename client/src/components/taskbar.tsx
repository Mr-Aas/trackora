import React from 'react'

export default function Taskbar() {
    return (
        <div className='outer bg-slate-800 h-12 flex justify-center items-center absolute w-full bottom-0 pl-4 pr-4'>
            <ul className='flex text-xl font-bold text-white w-full justify-between gap-4  '>
                <li  className='menu ' >Today</li>
                <li  className='menu ' >calender</li>
                <li className='menu ' >history</li>
                <li className='menu ' >report</li>
                <li className='menu ' >settings</li>
            </ul>
        </div>
    )
}
