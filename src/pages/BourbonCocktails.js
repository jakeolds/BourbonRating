import React from 'react';
import BourbonCocktailCard from '../components/BourbonCocktailCard';

const BourbonCocktails = () => {
    const cocktails = [
        {
            name: "Old Fashioned",
            ingredients: "2 oz Bourbon, 1 Sugar cube, 2-3 dashes Angostura bitters, Few dashes plain water",
            method: "Muddle sugar cube and bitters with one dash of water. Fill the glass with ice cubes and add bourbon. Garnish with an orange slice, and a cocktail cherry."
        },
        // ... add more cocktails later
    ];

    return (
        <div className="cocktails-grid">
            <h1>Bourbon Cocktails</h1>
            {cocktails.map(cocktail => (
                <BourbonCocktailCard 
                    key={cocktail.name} 
                    name={cocktail.name} 
                    recipe={`${cocktail.ingredients} - ${cocktail.method}`}
                />
            ))}
        </div>
    );
};

export default BourbonCocktails;