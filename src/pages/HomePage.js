import React from 'react';
import { Link } from 'react-router-dom';
import BourbonList from '../components/BourbonList';
import AddButton from '../components/AddButton';

const HomePage = () => {
    return (
        <div>
            <h1>Bourbon Collection</h1>
            <BourbonList />
            <AddButton />
        </div>
    );
};

export default HomePage;