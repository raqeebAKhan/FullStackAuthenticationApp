import { useState } from 'react'
import PhoneInput from 'react-phone-input-component'
import 'react-phone-input-component/lib/style.css'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../App.css';
import { fontSize } from '@mui/system';

function App() {

		const toggleModal = () => {
			setModal(!modal)
		}

	const [Firstname, setFirstName] = useState('')
	const [Lastname, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const[modal, setModal] = useState('')

	
	const resetForm = () => {
		setFirstName("")
		setLastName("")
		setEmail("")
		setPhone("")
		setPassword("")
	}

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Firstname,
				Lastname,
				email,
				phone,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			toggleModal()
		} 
	}

	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 1
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 1
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 1
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1
		}
	  };


	return (
		<div className='reg-cont'>
			<h1>Create Account</h1>
		<div className='reg-div' >
			
			<form className="reg-form" onSubmit={registerUser}>
				 <div className='inputBox'>
					<input
					value={Firstname}
					onChange={(e) => setFirstName(e.target.value)}
					type="text" required="required"
				/><span>First name</span>
				</div>
				<br />
				<div className='inputBox'>
					<input
					value={Lastname}
					onChange={(e) => setLastName(e.target.value)}
					type="text" required="required"
				/><span>Last name</span>
				</div>
				<br />
				<div className='inputBox'>
					<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email" required="required"
				/><span>Your Email address</span>
				</div>
				<br />
	
				<PhoneInput
  			 country={'us'}
  			value={phone}
  			onChange={setPhone}
  			label="Your Phone"
			autoFocus="true"

  			inputExtraProps={{
   				name: "phone",
    			required: true,
    			autoFocus: true
  				}}

   			containerStyle={{
              border: "2px solid blue",
			  borderRadius: "18px",
			  width: "310px",
			  padding:"4px",
			  autoFocus: true
               }}
			/>	
  	
				<br />
				<div className='inputBox'>
					<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password" required="required"
				/><span>Password</span>
				</div>
				<br />
				
				<button type="submit">Register</button>
				

				<p>Already Registered? <Link style={{color: "blue", textDecoration: "none"}} to='/login'>Login</Link> </p>
			</form>
			
			<div  className='div-page1'>
			<Carousel responsive={responsive}
			showDots= {true}>
      <div>
	<img src='https://www.trio.dev/hubfs/php-developer.webp'/>
	<h1 style={{color: "white", marginLeft: '70px',  marginTop: '10px'}}>Developer handoff the improvement</h1>
	<p style={{color: "white", marginLeft: '50px',  marginTop: '10px'}}>You'll now see a highlight around Symbols on <br/> the Canvas and in the Inspector. </p>
	</div>
	<div>
	<img src='https://www.trio.dev/hubfs/php-developer.webp'/>
	<h1 style={{color: "white", marginLeft: '70px',  marginTop: '10px'}}>Developer handoff the improvement</h1>
	<p style={{color: "white", marginLeft: '50px',  marginTop: '10px'}}>You'll now see a highlight around Symbols on <br/> the Canvas and in the Inspector. </p>
	</div>
	<div>
	<img src='https://www.trio.dev/hubfs/php-developer.webp'/>
	<h1 style={{color: "white", marginLeft: '70px',  marginTop: '10px'}}>Developer handoff the improvement</h1>
	<p style={{color: "white", marginLeft: '50px',  marginTop: '10px'}}>You'll now see a highlight around Symbols on <br/> the Canvas and in the Inspector. </p>
	</div>
	<div>
	<img src='https://www.trio.dev/hubfs/php-developer.webp'/>
	<h1 style={{color: "white", marginLeft: '70px',  marginTop: '10px'}}>Developer handoff the improvement</h1>
	<p style={{color: "white", marginLeft: '50px',  marginTop: '10px'}}>You'll now see a highlight around Symbols on <br/> the Canvas and in the Inspector. </p>
	</div>
	</Carousel>
	</div>
	{modal && (
        	<div className="modal">
          	<div onClick={toggleModal} className="overlay"></div>
          	<div className="modal-content">
           	<h1>Thank you!</h1>
		   	<p>Thank you for submitting the form.
			<br/>
			One of our team members will be in touch shortly.
		   	</p>
           <CloseIcon className="close-modal" onClick={toggleModal} onSubmit={() => resetForm()}/>

          </div>
        </div>
      )}
					
	</div>

	
		</div>
	)
}



export default App