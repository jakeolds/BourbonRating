import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => {
    return (
        <div>
            <Link to="/add-bourbon">Add Bourbon</Link>
        </div>
    );
};

export default AddButton;