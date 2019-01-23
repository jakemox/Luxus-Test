import React from 'react';
import MealTypeDisplay from '../meal-type-display/meal-type-display.jsx';

const AllDisplay = (
    <section className="featured py-5">
        <div className="container">
            <div className="row">
                <div className="card col-sm mx-2">
                    <img className="card-img-top" src={require('../img/pork.jpg')} alt="Card image cap"></img>
                    <div className="card-img-overlay">
                        <p className="card-featured small">Featured</p>
                    </div>
                    <div className="card-body">
                        <p className="text-primary small"><u><b>Recipe</b></u></p>
                        <h5 className="card-title">Smoky maple pork belly</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequuntur minima eaque veritatis mollitia.</p>
                    </div>
                </div>
            
                <div className="card col-sm mx-2">
                    <img className="card-img-top" src={require('../img/toast.jpg')} alt="Card image cap"></img>
                    <div className="card-img-overlay">
                        <p className="card-featured small">Featured</p>
                    </div>                               
                    <div className="card-body">
                        <p className="text-success small"><u><b>Recipe</b></u></p>
                        <h5 className="card-title">Lorem ipsum dolor sit amet consectetur </h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequuntur minima eaque veritatis mollitia.</p>
                    </div>
                </div>
            
                <div className="card col-sm mx-2">
                    <img className="card-img-top" src={require('../img/egg.jpg')} alt="Card image cap"></img>
                    <div className="card-img-overlay">
                        <p className="card-featured small">Featured</p>
                    </div>
                    <div className="card-body">
                        <p className="text-primary small"><u><b>Recipe</b></u></p>
                        <h5 className="card-title">Ultimate poached egg upgrade</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequuntur minima eaque veritatis mollitia.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default class SectionTwo extends React.Component {
    render() {
        if (this.props.selection === 'All') {
            // return AllDisplay;
            return <MealTypeDisplay />;
        } else if (this.props.selection === 'Meal type') {
            return 'hello';
        } else {
            return 'wrong';
        }
    }
}