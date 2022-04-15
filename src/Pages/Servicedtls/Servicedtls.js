import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Servicedtls = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1> this is service {serviceId.length} </h1>

            <Link to="/CheacOut"> <button className='btn btn-primary'> Proceed Checkout</button> </Link>
        </div>
    );
};

export default Servicedtls;