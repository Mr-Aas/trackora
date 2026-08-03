
import { RouterProvider } from 'react-router-dom'
import HomeRoutes from './routes/homeRoutes'
// import Taskbar from './components/taskbar.tsx'
// import Header from './components/header.tsx'



import './App.css'

function App() {


  return (
    <>
    <RouterProvider router={HomeRoutes}/>
      {/* <Header/> */}
      {/* <Taskbar/> */}

    </>
  )
}

export default App
