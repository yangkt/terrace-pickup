import React, {Component} from 'react';
import './css/BuildBurrito.css';
import Burrito from './assets/burrito.png';
import Beans from './assets/beans.png';
import BRice from './assets/brown rice.png';
import Chicken from './assets/chicken.png';
import Onions from './assets/onions.png';
import Peppers from './assets/peppers.png';
import Pork from './assets/pork.png';
import Steak from './assets/steak.png';
import Tacos from './assets/Tacos.png';
import WRice from './assets/white rice.png';
import Bowl from './assets/Bowl.png';

class BuildBurrito extends Component {

    constructor(props){
        super(props);
        this.state = {
            order: '',
            addNotes: ''
        }
    }

    addIng = (input) => {
        this.setState({ order: this.state.order + input})
    }

    addNotes = (input) => {
        this.setState({ order: this.state.addNotes + input.text})
    }

    render() {
        return (
        <div className = 'build-burrito'>
            <div className='header-text'>
                BUILD YOUR BURRITO
            </div>
            <div className={'ingredient-slct-group'}>
                <div className={'ingredient-cat-text'}> 
                    BASE
                    <div className = 'image-group'>

                        <button className='ing-image' onClick={() => this.addIng('Burrito Bowl: ')} >
                            <img src={Bowl} className = 'ing-image' alt='bowl'/>
                        </button>
                        
                        <button className='ing-image' onClick={() => this.addIng('Tacos: ')} >
                            <img src={Tacos} className = 'ing-image' alt='tacos' />
                        </button>

                        <button className='ing-image' onClick={() => this.addIng('Burrito: ')} >
                            <img src={Burrito} className = 'ing-image' alt='burrito'/>
                        </button>
                    </div>
                    
                </div>
                <div className={'ingredient-cat-text'}> 
                    RICE
                    <div className = 'image-group' onClick={() => this.addIng('\nwhite rice')}>
                        <button className='ing-image' >
                            <img src={WRice} className = 'ing-image' alt='white rice' />
                        </button>
                        <button className='ing-image' onClick={() => this.addIng('\nbrown rice')} >
                            <img src={BRice} className = 'ing-image' alt ='brown rice'/>
                        </button>
                    </div>
                </div>
                <div className={'ingredient-cat-text'}> 
                    PROTEIN
                    <div className = 'image-group'>
                        <button className='ing-image' onClick={() => this.addIng('\nchicken')} >
                            <img src={Chicken} className = 'ing-image' alt='chicken' />
                        </button>
                        <button className='ing-image' onClick={() => this.addIng('\npork')} >
                            <img src={Pork} className = 'ing-image' alt='pork'/>
                        </button>
                        <button className='ing-image' onClick={() => this.addIng('\nsteak')}>
                            <img src={Steak} className = 'ing-image' alt='steak' />
                        </button>
                    </div>
                </div>
                <div className={'ingredient-cat-text'}> 
                    TOPPINGS
                    <div className = 'image-group'>
                        <button className='ing-image' onClick={() => this.addIng('\nbeans')}>
                            <img src={Beans} className = 'ing-image' alt='beans' />
                        </button>
                        <button className='ing-image' onClick={() => this.addIng('\nonions')}>
                            <img src={Onions} className = 'ing-image' alt='onions' />
                        </button>
                        <button className='ing-image' onClick={() => this.addIng('\npeppers')} >
                            <img src={Peppers} className = 'ing-image' alt='peppers' />
                        </button>
                    </div>
                </div>
                <div className={'ingredient-cat-text'}> 
                    ADDITIONAL NOTES
                    <input className = 'add-notes' type='text' onChange = {this.addNotes}/>
                </div>
            </div>

        </div>
        );
    }

};

export default BuildBurrito;