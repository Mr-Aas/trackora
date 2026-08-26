
import { RouterProvider } from 'react-router-dom'
import HomeRoutes from './routes/homeRoutes'


import './App.css'

function App() {


  return (
    <div >
    <RouterProvider  router={HomeRoutes} />

    </div>
  )
}

export default App
