import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { 
        id: '1', 
        name: 'Woodford Reserve', 
        description: 'A personal favorite, smooth and rich.', 
        ratings: [{ userId: 'initial', score: 4.5 }], 
        imageUrl: 'https://kybourbontrail.com/wp-content/uploads/2018/01/woodford-on-counter.jpg'
    },
    { 
        id: '2', 
        name: 'Buffalo Trace', 
        description: 'A Homewtown classic.', 
        ratings: [{ userId: 'initial', score: 4.7 }],
        imageUrl: 'https://dydza6t6xitx6.cloudfront.net/ci-buffalo-trace-bourbon-62da7da303262963.jpeg'
    },
    { 
        id: '3', 
        name: 'Wild Turkey', 
        description: 'Bold and full of character.', 
        ratings: [{ userId: 'initial', score: 4.2 }],
        imageUrl: 'https://wevino.store/cdn/shop/products/242.jpg?v=1693186042'
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