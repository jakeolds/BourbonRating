import React from 'react';
import { useSelector } from 'react-redux';
import BourbonItem from './BourbonItem';

const BourbonList = () => {
    const bourbons = useSelector(state => state.bourbons);

    return (
        <div>
            {bourbons.map(bourbon => (
                <BourbonItem key={bourbon.id} bourbon={bourbon} />
            ))}
        </div>
    );
};

export default BourbonList;