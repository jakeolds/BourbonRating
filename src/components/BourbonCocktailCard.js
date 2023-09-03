import React from 'react';

const BourbonCocktailCard = ({ name, recipe }) => {
    return (
        <div className="cocktail-card">
            <div className="card-inner">
                <div className="card-front">
                    <h2>{name}</h2>
                </div>
                <div className="card-back">
                    <p>{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default BourbonCocktailCard;