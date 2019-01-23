import React from 'react';
import SectionTwo from '../section-two/section-two.jsx';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 'All'
        };

        this.action = this.action.bind(this);
    }
    
    action(event) {
        console.log(event.target.value);
        this.setState({
            selected: event.target.value
        });
    }
    
    render() {
        return (
            <>
                <div className="container">
                    <div className="dropdown">
                        <p className="browse small">Browse By</p>
                        <button className="options d-flex justify-content-between" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <p>{this.state.selected}</p>
                            <p className="arrow">&#8964;</p>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button value="Meal type" onClick={this.action}className="dropdown-item">Meal type</button>
                            <button className="dropdown-item">Ingredients</button>
                            <button className="dropdown-item">World Cuisine</button>
                            <button className="dropdown-item">Cooking Style</button>
                        </div>
                    </div>
                </div>
                <SectionTwo selection={this.state.selected}/>
            </>
        );
    }
}