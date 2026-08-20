import React from 'react'

function Logs() {
    return (
        <div>

            <div className='flex justify-center border h-60 items-center'>
                <div className="addlogs bg-red-300 h-50 w-[80vh] rounded-2xl flex-col ">
                    <div className="details flex w-full justify-center font-bold font-mono text-2xl h-20 items-center">
                        What You Have Learnt Today
                    </div>
                    <div className="inputs h-10  flex   justify-center items-center w-full">
                        <div className="flex w-[80%]  border rounded-xl h-[90%]">

                        <input type="text" className='w-full bg-amber-50 rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logs
