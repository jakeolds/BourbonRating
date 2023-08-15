import React from 'react';
import { useSelector } from 'react-redux';
import BackButton from '../components/BackButton';

const BourbonDetails = ({ match }) => {
    const { bourbonId } = match.params;
    const bourbon = useSelector(state => state.bourbon.find(b => b.id === bourbonId));

    if (!bourbon) {
        return <div>Bourbon not found!</div>;
    }

    return (
        <div>
            <h2>{bourbon.name}</h2>
            <p>{bourbon.description}</p>
            <div>Rating: {bourbon.ratings[0].score}/5</div>
            <BackButton />
        </div>
    );
};

export default BourbonDetails;