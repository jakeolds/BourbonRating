import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated this line
import { addBourbon } from './bourbonSlice';
import { v4 as uuidv4 } from 'uuid';

const BourbonForm = ({ existingBourbon }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Updated this line

    const [name, setName] = useState(existingBourbon ? existingBourbon.name : '');
    const [description, setDescription] = useState(existingBourbon ? existingBourbon.description : '');
    const [rating, setRating] = useState(existingBourbon && existingBourbon.ratings.length ? existingBourbon.ratings[0].score : 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const bourbonData = {
            id: existingBourbon ? existingBourbon.id : uuidv4(),
            name,
            description,
            ratings: existingBourbon ? existingBourbon.ratings : [{ userId: 'currentUser', score: rating }]
        };

        dispatch(addBourbon(bourbonData));

        // Redirect to home page after submitting
        navigate('/'); // Updated this line
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Description:</label>
                <textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>

            {!existingBourbon && (
                <div>
                    <label>Initial Rating (0-5):</label>
                    <input 
                        type="number" 
                        min="0" 
                        max="5" 
                        step="0.1"
                        value={rating} 
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                    />
                </div>
            )}

            <div>
                <button type="submit">{existingBourbon ? 'Update' : 'Add'} Bourbon</button>
            </div>
        </form>
    );
};

export default BourbonForm;