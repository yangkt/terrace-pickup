import React from 'react';
import './css/BuildBurrito.css';

function BuildBurrito() {
    
    return (
    <div className = 'build-burrito'>
        <div className='header-text'>
            BUILD YOUR BURRITO
        </div>
        <div className={'ingredient-slct-group'}>
            <div className={'ingredient-cat-text'}> 
                BASE
            </div>
            <div className={'ingredient-cat-text'}> 
                RICE
            </div>
        </div>

    </div>
    );

};

export default BuildBurrito;