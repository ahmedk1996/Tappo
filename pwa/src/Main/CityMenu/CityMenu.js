import React from 'react';
import CityMenuCard from './CityMenuCard';
import './CityMenu.scss';

const CityMenu = () => {

    let cards = [];
    for (let i = 0; i < 1; i++) {
        cards.push(<CityMenuCard />);
    }
    
    return (

        <div className="container">
            <div className="Menu">
        
                <div className="cardsContainer">
                    {cards}
                  
                </div>
            </div >
        </div >
    )
};
export default CityMenu;
