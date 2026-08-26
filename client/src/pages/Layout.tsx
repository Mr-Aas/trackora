// import React from 'react'
import { Outlet } from "react-router"
import Taskbar from "../components/navbarComponents/taskbar"
import Header from "../components/navbarComponents/header"


export default function Layout() {
    // (()=>console.log("i am invoked by my own"))()
    return (
        <div>
            <Header />
            <Outlet />
            <Taskbar />
        </div>
    )
}
