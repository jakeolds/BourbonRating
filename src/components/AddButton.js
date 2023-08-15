import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <div>
            <Link to="/add">Add Bourbon</Link>
        </div>
    );
};

export default AddButton;