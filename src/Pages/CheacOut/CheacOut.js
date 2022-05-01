import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UseServicedetals from '../../Hooks/UseServicedetals';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const CheacOut = () => {
    const {serviceId} = useParams();
    const [service] = UseServicedetals(serviceId);
    const [user] = useAuthState(auth);
    console.log(user);
    // const [user, setUser] = useState({
    //     name:'Akbor the Great',
    //     email:'akbar@momo.taj',
    //     address:'Tajmohol Road Md.pur',
    //     phone:'01869043543'
    // });
    // const handleAddressChange = event => {

    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address:newAddress, ...rest};
    //     setUser(newUser)
    //     console.log(newUser);
        
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            service: service.name,
            sericeId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
    }

    return (
        <div className='w-50 mx-auto'>

            <h1> Please Order: {service.name} </h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName}  name='name' placeholder='name' required readOnly/>
                <br/>
                <input className='w-100 mb-2' type="email" value={user.email}  name='email' placeholder='email' required readOnly />
                <br/>
                <input className='w-100 mb-2' type="text"  value={service.name} name='service' placeholder='service' required />
                <br/>
                <input className='w-100 mb-2' type="text"  value={user.address} name='addrsess' placeholder='addrsess' required  autoComplete='off'/>
                <br/>
                <input className='w-100 mb-2' type="text" value={user.phone} name='phone' placeholder='phone' required />
                <br/>
                <input className='btn btn-primary' type="submit" value=" Order" />

            </form>

            
        </div>
    );
};

export default CheacOut;