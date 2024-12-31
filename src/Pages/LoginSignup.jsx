import React,{useState} from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]=useState('');
  const [buttonText,setButtonText] = useState('Continue');
  const [headingText,setHeadingText]=useState('Login Up');
  const [error, setError] = useState('');

  const handleSubmit = () => {

    if (!name || !email || !password) {

      setError("All feilds are required!");
      // error('');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address!');
      return;
    }

    setError('');

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setHeadingText('Sign Up');
    setButtonText('Sign Up');

    navigate('/');
  };

    
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1 onClick={handleSubmit}>{headingText}</h1>
            <p className="error-message">{error}</p>
            <div className="loginsignup-feilds">
                <input type="text" placeholder='Your Name' value={name}
                 onChange={(e) => 
                 setName(e.target.value)
                 }/>
                <input type="email" placeholder='Email Address' value={email}
            onChange={(e) => 
            setEmail(e.target.value)
            }/>
                <input type="password" placeholder='password' value={password}
            onChange={(e) => 
            setPassword(e.target.value)
            }/>
            </div>
           <button onClick={handleSubmit}>{buttonText}</button> 
           <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
           <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
           </div>
        </div>

    </div>
  )
}

export default LoginSignup
