import React, {Component} from 'react';
import './css/RestaurantSide.css';
import OrdersLeft from './assets/orders left.png';

class RestaurantSide extends Component {

    constructor(props){
        super(props);
        this.state = {
            order: ''
        }
    }

    render() {
        return (
        <div className = 'rest-order-page'>
            <div className='header-text'>
                ORDERS TO COMPLETE
            </div>
            <img src={OrdersLeft} className = 'ing-image' alt='orders left'/>
            <div className= 'order-main'>
                
            </div>
            
              

        </div>
        );
    }

};

export default RestaurantSide;