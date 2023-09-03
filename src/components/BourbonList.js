import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BourbonItem from './BourbonItem';

const BourbonList = () => {
    const bourbons = useSelector(state => state.bourbons);

    return (
        <div>
            {/* Add Bourbon button */}
            <Link to="/add-bourbon" className="add-button">Add Bourbon</Link>

            {/* List out all the bourbons */}
            {bourbons.map(bourbon => (
                <BourbonItem key={bourbon.id} bourbon={bourbon} />
            ))}
        </div>
    );
};

export default BourbonList;