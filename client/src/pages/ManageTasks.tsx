// import React from 'react'
// import { useState, useEffect } from "react"
import { ServerPlus } from 'lucide-react'

// interface Task {
//     name: String,
//     logo: String,
//     description: String,
//     state: String,
//     goals: "",
//     logo: String,
//     logo: String,
//     logo: String,
//     logo: String,
// }


function ManageTasks() {

    return (
        <div>
            <Settings />

        </div>
    )
}

export default ManageTasks


function Settings() {

    const handleClick = () => {

    }
    return (
        <div className="w-full h-10 bg-slate-400 relative flex justify-end gap-2 items-center">
            <div className="addNewTask  border-2" onClick={handleClick}>
                <ServerPlus />
            </div>
        </div>
    )
}