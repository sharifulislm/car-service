import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Servicedtls = () => {
    const {serviceId} = useParams();
    const [ service, setService] = useState({});
    console.log(service);

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))

    },[])

    return (
        <div>
            <h1> You are about to book: {service.name} </h1>

            <Link to="/CheacOut"> <button className='btn btn-primary'> Proceed Checkout</button> </Link>
        </div>
    );
};

export default Servicedtls;