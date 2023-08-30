import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  
import { deleteBourbon } from '../features/bourbonSlice';

const BourbonItem = ({ bourbon }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();  

    const handleDelete = () => {
        dispatch(deleteBourbon(bourbon.id));
    };

    const handleEdit = () => {
        navigate(`/edit/${bourbon.id}`);  
    };

    return (
        <div className="bourbon-item">
            <img src={bourbon.imageUrl} alt={bourbon.name} className="bourbon-image" />
            <h2>{bourbon.name}</h2>
            <p>{bourbon.description}</p>
            <p>My Rating: {bourbon.ratings.reduce((total, rating) => total + rating.score, 0) / bourbon.ratings.length}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default BourbonItem;