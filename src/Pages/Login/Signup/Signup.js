import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css';
import auth from '../../../firebase.init';
import SocalLogin from '../SocalLogin/SocalLogin';
import { async } from '@firebase/util';



const Signup = () => {
     const [agree,setAgree]=useState(false)
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');




  

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);


      const navigateSignup = event => {
        navigate('/Login');
    }
    if(user){
        navigate("/Home");

    }
    if(user){
        console.log(user);

    }



const hendleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const agree = event.target.terms.checked;
   
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name });
    navigate("/Home");

    console.log('Updated profile');






    
}



    return (
        <div onSubmit={hendleSubmit} className='register-form'>
        <h2 style={{textAlign: 'center'}}>Please Register</h2>
        <form >
            <input ref={nameRef} type="text" name="name" id="" placeholder='Your Name'/>
            
            <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required/>
            
            <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required/>
            <input onClick={() => setAgree(!agree)} className='ms-1' type="checkbox" name="terms" id="terms" />
            <label  className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="">Accpet car terms and Conditions </label>
            <input disabled={!agree}
            className='mt-2 btn btn-primary'
             type="submit" value="Register" />
          
        </form>
        <p>Already have an account? <Link to="/Login" className='text-Primary pe-auto text-decoration-none' onClick={navigateSignup}>Please Login</Link> </p>
        
        <SocalLogin></SocalLogin>
       
    </div>
    );
};

export default Signup;