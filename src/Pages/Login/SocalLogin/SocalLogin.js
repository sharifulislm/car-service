import React from 'react';
import google from '../../../images/socal/google.png';
import facebook from '../../../images/socal/facebook.png';
import githup from '../../../images/socal/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocalLogin = () => {

  const navigate = useNavigate()
  let ErrorMessage;
  let LoaddingMessage;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    if (error || error1) {
        
         ErrorMessage = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message} </p>
          </div>
        
      }
      if (loading || loading1) {
        LoaddingMessage = <p className='ps-4'>Loading...</p>
      }
      if (user || user1) {
        navigate('/Home');
      }

    return (
        <div>
        <div className='d-flex align-items-center'>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='bg-primary w-50'></div>
        </div>
        {ErrorMessage}
        {LoaddingMessage}

 
        <div className=''>
            <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className='px-2'>Google Sign In</span>
            </button>
            <button className='btn btn-info w-50 d-block mx-auto my-2'>
                <img style={{ width: '30px' }} src={facebook} alt="" />
                <span className='px-2'>Facebook Sign In</span>
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                <img style={{ width: '30px' }} src={githup} alt="" />
                <span className='px-2'>Github Sign In</span>
            </button>
        </div>
    </div>
    );
};

export default SocalLogin;