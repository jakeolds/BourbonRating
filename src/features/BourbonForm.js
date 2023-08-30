import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addBourbon, updateBourbon } from './bourbonSlice';
import { v4 as uuidv4 } from 'uuid';

const BourbonForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams(); // Get the ID from the route parameters
    const existingBourbon = useSelector(state => state.bourbons.find(b => b.id === id));

    const [name, setName] = useState(existingBourbon ? existingBourbon.name : '');
    const [description, setDescription] = useState(existingBourbon ? existingBourbon.description : '');
    const [rating, setRating] = useState(existingBourbon && existingBourbon.ratings.length ? existingBourbon.ratings[0].score : 0);

    useEffect(() => {
        if (existingBourbon) {
            setName(existingBourbon.name);
            setDescription(existingBourbon.description);
            setRating(existingBourbon.ratings[0].score);
        }
    }, [existingBourbon]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const bourbonData = {
            id: existingBourbon ? existingBourbon.id : uuidv4(),
            name,
            description,
            ratings: existingBourbon ? existingBourbon.ratings : [{ userId: 'currentUser', score: rating }]
        };

        if (existingBourbon) {
            dispatch(updateBourbon(bourbonData));
        } else {
            dispatch(addBourbon(bourbonData));
        }

        // Redirect to home page after submitting
        navigate('/'); 
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