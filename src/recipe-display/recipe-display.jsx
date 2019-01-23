import React from 'react';
import RecipeCard from '../recipe-card/recipe-card.jsx';

export default class MealTypeDisplay extends React.Component {
    render() {
        return (
            <section className="featured py-5">
                <div className="container">
                    <div className="row">
                        {this.props.list.map(
                            (recipe, i) =>
                            <RecipeCard 
                                key={i}
                                image={recipe.image}
                                type={recipe.type}
                                title={recipe.title}
                            />
                        )}
                    </div>
                </div>
            </section>
        )
    }
}