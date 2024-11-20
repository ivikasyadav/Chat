import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import { Route,Routes ,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {authUser, setAuthUser} =useAuthContext()

  return (
    <>
    
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>

        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />


        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />

        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
      </Routes>
      <Toaster/>
		</div>

    </>
  ) 
}

export default App
