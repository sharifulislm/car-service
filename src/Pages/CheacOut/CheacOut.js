import React from 'react';
import { useParams } from 'react-router-dom';
import UseServicedetals from '../../Hooks/UseServicedetals';

const CheacOut = () => {
    const {serviceId} = useParams();
    const [service] = UseServicedetals(serviceId);
    return (
        <div>

            <h1> Please Order: {service.name} </h1>
            
        </div>
    );
};

export default CheacOut;