import '../styles/App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Index from './Index'
import Quiz from './Quiz'
import Result from './Result'
import { Auth } from '../helper/helper.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Index></Index>
  },
  {
    path:'/quiz',
    element:<Auth><Quiz /></Auth>
  },
  {
    path:'/result',
    element:<Auth><Result /></Auth>
  }
])
function App() {

  return (
   <>
      <RouterProvider router={router} />
   </>
  )
}

export default App
