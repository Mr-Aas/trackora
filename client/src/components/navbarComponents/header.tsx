import { Link } from 'react-router-dom';
import { ClipboardPen, ListChecks, NotebookPen, AlarmClockPlus } from 'lucide-react';
// import { } from 'lucide';


export default function Header() {
    const today = () => {
        let now = new Date();
        return now.toLocaleDateString('en-GB', {
            weekday: 'short',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        })}
   return (
            <div className='outer bg-gray-600 h-12 flex justify-center items-center w-full top-0 pl-4 pr-4'>
                <ul className=' flex text-xl text-white w-full justify-between gap-4  '>
                    <Link to='/manageTasks' className='menu flex flex-col items-center ' >
                        <ClipboardPen />
                        <span className='text-sm'>Tasks</span>
                    </Link>

                    <Link to='/logs' className='menu  flex flex-col items-center' >
                        <NotebookPen />
                        <span className='text-sm'>Logs</span>
                    </Link>
                    <Link to='/' className="datetoday w-[40%]">

                        <div className='flex justify-center flex-col items-center'>{today()}
                            <span className='text-sm'>(today)</span>
                        </div>
                    </Link>
                    <Link to='/todos' className='menu  flex flex-col items-center' >
                        <ListChecks />
                        <span className='text-sm'>Todos</span>
                    </Link>


                    <Link to='/addEntries' className='  flex flex-col items-center' >
                        <AlarmClockPlus />
                        <span className='text-sm'>Add Entry</span>
                    </Link>

                </ul>
            </div>
        )
    }
