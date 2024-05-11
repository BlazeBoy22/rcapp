 
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Navigate } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser} = useAuthContext();
  console.log("printing auth user",authUser);
  
  

  return (
     
    <div className='overflow-hidden min-h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ?<Home/>:<Login/>}></Route>
          <Route path='/login' element={authUser ?<Navigate to='/'></Navigate>:<Login/>}></Route>
          <Route path='/signup' element={authUser ?<Navigate to='/'></Navigate>: <Signup/>}></Route>
        </Routes>
        <Toaster></Toaster>
    </div> 
  )
}

export default App
