import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseServicedetals from '../../Hooks/UseServicedetals';

const Servicedtls = () => {
    const {serviceId} = useParams();
    const [service] = UseServicedetals(serviceId);

    return (
        <div>
            <h1> You are about to book: {service.name} </h1>

            <Link to={`/CheacOut/${serviceId}`}> <button className='btn btn-primary'> Proceed Checkout</button> </Link>
        </div>
    );
};

export default Servicedtls;