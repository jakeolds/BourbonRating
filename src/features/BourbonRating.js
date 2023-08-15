import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBourbon } from './bourbonSlice';

const BourbonRating = ({ bourbon }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        
        const updatedRatings = [...bourbon.ratings];
        updatedRatings[0].score = parseFloat(rating);

        dispatch(updateBourbon({ ...bourbon, ratings: updatedRatings }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Rating (0-5): </label>
                <input 
                    type="number" 
                    min="0" 
                    max="5" 
                    step="0.1" 
                    value={rating}
                    onChange={e => setRating(e.target.value)} 
                />
            </div>
            <div>
                <button type="submit">Update Rating</button>
            </div>
        </form>
    );
};

export default BourbonRating;