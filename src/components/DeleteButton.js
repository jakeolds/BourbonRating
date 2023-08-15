import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBourbon } from '../features/bourbonSlice';

const DeleteButton = ({ bourbonId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteBourbon(bourbonId));
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;