import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // navigate back in the history stack
    };

    return (
        <button onClick={goBack}>Back</button>
    );
};

export default BackButton;