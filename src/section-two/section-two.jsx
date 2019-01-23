import React from 'react';
import MealTypeDisplay from '../meal-type-display/meal-type-display.jsx';
import RecipeDisplay from '../recipe-display/recipe-display.jsx';
import RecipeCard from '../recipe-card/recipe-card.jsx';

export default class SectionTwo extends React.Component {
    render() {
        if (this.props.selection === 'All') {
            return <RecipeDisplay list={
                [
                    {
                        image: 'pork',
                        type: <p className="text-primary small"><u><b>Recipe</b></u></p>,
                        title: 'Smoky maple pork belly'
                    },
                    {
                        image: 'toast',
                        type: <p className="text-success small"><u><b>Blog</b></u></p>,
                        title: 'Lorem ipsum dolor sit amet consectetur'
                    },
                    {
                        image: 'egg',
                        type: <p className="text-primary small"><u><b>Recipe</b></u></p>,
                        title: 'Ultimate poached egg upgrade'
                    }
                ]
            }/>
            // return DefaultDisplay;
            // return <MealTypeDisplay />;
        } else if (this.props.selection === 'Meal type') {
            return <MealTypeDisplay />;
        }
    }
}