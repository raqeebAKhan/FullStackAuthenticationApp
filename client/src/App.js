import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Success from './pages/Success'

import Maincomp from './pages/Maincomp'
import Otp from './pages/Otp'

const App = () => {
	return (
		<div >
			<BrowserRouter>
		<div className='HomeButton'>	
		Not a member?    <Link style={{color: "blue", textDecoration: "none"}} to='/register'>Create an account</Link>
        
		</div>

		

      <Routes>
		<Route path='/' element={<Maincomp/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
		  <Route path="/otp"  element={<Otp/>} />
		  <Route path="/success"  element={<Success/>} />

		 

		   </Routes>
    </BrowserRouter>
		</div>
	)
}

export default App