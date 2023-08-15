import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { 
        id: '1', 
        name: 'Woodford Reserve', 
        description: 'A personal favorite, smooth and rich.', 
        ratings: [{ userId: 'initial', score: 4.5 }], 
        imageUrl: 'https://example.com/images/woodford-reserve.jpg'
    },
    { 
        id: '2', 
        name: 'Buffalo Trace', 
        description: 'A Homewtown classic.', 
        ratings: [{ userId: 'initial', score: 4.7 }],
        imageUrl: 'https://example.com/images/buffalo-trace.jpg'
    },
    { 
        id: '3', 
        name: 'Wild Turkey', 
        description: 'Bold and full of character.', 
        ratings: [{ userId: 'initial', score: 4.2 }],
        imageUrl: 'https://example.com/images/wild-turkey.jpg'
    }
];

const bourbonSlice = createSlice({
    name: 'bourbon',
    initialState,
    reducers: {
        addBourbon: (state, action) => {
            state.push(action.payload);
        },
        updateBourbon: (state, action) => {
            const index = state.findIndex(b => b.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteBourbon: (state, action) => {
            return state.filter(b => b.id !== action.payload);
        }
    }
});

export const { addBourbon, updateBourbon, deleteBourbon } = bourbonSlice.actions;

export default bourbonSlice.reducer;