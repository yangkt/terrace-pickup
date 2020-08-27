import React from 'react';
import './css/BuildBurrito.css';

import { render } from '@testing-library/react';

function BuildBurrito() {
    
        return (
        <>
            <div className={'header-text'}>
                BUILD YOUR BURRITO
            </div>
            <div className={'ingredient-slct-group'}>
                <div className={'ingredient-cat-text'}> 
                    RICE
                </div>
            </div>

        </>
        );

};

export default BuildBurrito;