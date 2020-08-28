import React, {Component} from 'react';
import './css/RestaurantSide.css';
import OrdersLeft from './assets/orders left.png';
import DoneButton from './assets/done button.png'

class RestaurantSide  extends Component {

    constructor(props) {
        super(props)
        this.state = {
            order: props.order
        }
    }

    render() {
        return (
        <div className = 'rest-order-page'>
            <img src={OrdersLeft} className = 'ing-image' alt='orders left'/>
            <div className='header-text'>
                ORDERS TO COMPLETE </div>
            
            <div className= 'order-main'>
                <div className = 'text-box'>
                    <div className = 'text-name'>
                        JOHN D.
                    </div>

                    <div className = 'text-order-number'>
                        Order # 12345
                    </div>

                    <div className = 'text-ings'>
                        {this.state.order}

                    </div>

                    <div className = 'text-notes'>
                        Notes:
                    </div>
                    
                </div> 
                <img src={DoneButton} className = 'done-button' alt='done button'/>
            </div>
            

        </div>
        );
    }

};

export default RestaurantSide;