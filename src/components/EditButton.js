import React from 'react';
import { Link } from 'react-router-dom';

const EditButton = ({ bourbonId }) => {
    return (
        <Link to={`/edit/${bourbonId}`}>Edit</Link>
    );
};

export default EditButton;