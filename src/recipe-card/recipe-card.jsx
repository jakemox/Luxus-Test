import React from 'react';

export default class RecipeCard extends React.Component {
    render() {
        return (
            <div className="card col-sm mx-2">
                <img className="card-img-top" src={require(`../img/${this.props.image}.jpg`)} alt="Card image cap"></img>
                <div className="card-img-overlay">
                    <p className="card-featured small">Featured</p>
                </div>
                <div className="card-body">
                    {this.props.type}
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam consequuntur minima eaque veritatis mollitia.</p>
                </div>
            </div>
        )
    }
}