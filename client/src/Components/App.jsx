import '../styles/App.css'
import { Routes, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register';
import Quiz from './Quiz'
import Result from './Result'
import { Auth } from '../helper/helper.jsx'
import Home from './Home';
import Login_Page from '../helper_pages/login_Page';
import {useSelector} from 'react-redux';
import Results_list from './Results_list';
function App() {

  const islogin = useSelector((state) => state.User.islogin)

  return (
    <>
      <Routes>
        {
          islogin &&
          <>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/result' element={<Result />} />
            <Route path='/result_list' element={<Results_list />} />
            <Route path='*' element={<Login />} />
          </>
        }
        {
          !islogin &&
          <>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Login />} />

          </>
        }
      </Routes>
    </>
  )
}

export default App
