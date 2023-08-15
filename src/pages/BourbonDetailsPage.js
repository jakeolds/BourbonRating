import React from 'react';
import { useSelector } from 'react-redux';
import BourbonRating from '../features/BourbonRating';
import BackButton from '../components/BackButton';

const BourbonDetailsPage = ({ match }) => {
    const { bourbonId } = match.params;
    const bourbon = useSelector(state => state.bourbon.find(b => b.id === bourbonId));

    if (!bourbon) {
        return <div>Bourbon not found!</div>;
    }

    return (
        <div>
            <h2>{bourbon.name}</h2>
            <p>{bourbon.description}</p>
            <BourbonRating bourbon={bourbon} />
            <BackButton />
        </div>
    );
};

export default BourbonDetailsPage;