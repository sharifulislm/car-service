import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {

    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');



    const navigateSignup = event => {
        navigate('/Login');
    }

const hendleSubmit = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(name,email,password);
    
}



    return (
        <div onSubmit={hendleSubmit} className='register-form'>
        <h2 style={{textAlign: 'center'}}>Please Register</h2>
        <form >
            <input ref={nameRef} type="text" name="name" id="" placeholder='Your Name'/>
            
            <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required/>
            <input type="submit" value="Register" />
        </form>
        <p>Already have an account? <Link to="/Login" className='text-danger pe-auto text-decoration-none' onClick={navigateSignup}>Please Login</Link> </p>
    </div>
    );
};

export default Signup;