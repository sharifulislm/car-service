import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import {  toast } from 'react-toastify';

import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

   const emailRef = useRef('');
   const passwordRef = useRef('');
   const navigate = useNavigate();
   const location = useLocation();



 let from = location.state?.from?.pathname || "/";
 let ErrorElement;
   const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

   const navigateSignup = event => {
    navigate('/Signup');
}
const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

if (error || error1) {
        
    ErrorElement = <div>
       <p className='text-danger'>Error: {error?.message} {error1?.message} </p>
     </div>
   
 }
 if (loading || sending) {
    ErrorElement = <p className='ps-4'>Loading...</p>
 }


if(user){
    // navigate("/Home");

}


   const hendleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)

        const {data} = await axios.post('http://localhost:5000/login',{email});
      console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
      
   }

   const ResetPassword = async() => {
    const email = emailRef.current.value;

    if(email) {
    await sendPasswordResetEmail(email);
   
 toast('Sent email');
} 
else{
    toast('please enter your email address');
}
}


   


     

    return (
        <div className='container w-50 mx-auto'>
        <h2 className='text-primary text-center mt-2'>Please Login</h2>
        <Form onSubmit={hendleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef}  type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            { ErrorElement}
            <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Login
            </Button>
        </Form>
    
       
        <p>New to Genius Car? <Link to="/Signup" className='text-Primary pe-auto text-decoration-none' onClick={navigateSignup}>Please Register</Link> </p>
        <p>Forget password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={ResetPassword}>Reset Password</button> </p>

        
    </div>
    );
};

export default Login;