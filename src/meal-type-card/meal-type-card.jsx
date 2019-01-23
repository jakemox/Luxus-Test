import React from 'react';

export default class SectionTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'card-meal-types'
        };
    }

    action = () => {
        console.log(this.props.image);
        this.props.action({
            selected: this.props.image
        })
    }
    
    render() {
        return (
            <div className="col-md-4 mb-4">
                <div id={this.props.image} onClick={this.action} className={`card ${this.props.color} d-flex column align-items-center text-center`}>
                    <img className="card-img-top img-fluid pt-4" src={require(`../img/${this.props.image}.svg`)} alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequuntur minima eaque veritatis mollitia.</p>
                    </div>
                </div>
            </div>
        )
    }
}