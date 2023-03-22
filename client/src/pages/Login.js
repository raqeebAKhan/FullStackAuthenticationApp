import {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

 

  async function loginUser(event){
    event.preventDefault()

    const response = await fetch('http://localhost:1337/api/login',{
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()

   if(data.user){
    localStorage.setItem('token', data.user)
   alert('Login Successfull')
 
  navigate('/otp')
   } else
   {
    alert('Please check your username and password')}
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
  <div className='log-cont'> 
  <h1>Welcome to <br/>
  Systempackage</h1>
<div className='log-div'>

  <form className='log-form' onSubmit={loginUser}> 
  <div className='inputBox'>
					<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email" required="required" placeholder='Enter your Email'
				/>
				</div>
				<br />
				<div className='inputBox'>
					<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password" required="required" placeholder='Enter your password'
				/>
				</div>
        
  <button style={{width: "310px"}} type="submit">Next</button>
      <h4>Forgot your password?</h4>
  
  </form>
 
  <div  className='div-page2'>
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
 
</div>
     
    </div>

    
   );
 
 
  }

 export default App;