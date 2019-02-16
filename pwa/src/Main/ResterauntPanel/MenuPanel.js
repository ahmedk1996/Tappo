import React from 'react';
import MealDetails from './MealDetails'
import './MenuPanel.scss';
import ButtonSection from './ButtonSection'


const MenuPanel = () => {
    return (
        <div className="container">

            <ButtonSection />
            <MealDetails />

        </div>

    );


}

export default MenuPanel;