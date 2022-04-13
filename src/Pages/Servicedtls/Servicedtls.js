import React from 'react';
import { useParams } from 'react-router-dom';

const Servicedtls = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1> this is service {serviceId.length} </h1>
        </div>
    );
};

export default Servicedtls;