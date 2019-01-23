import React from 'react';
import RecipeDisplay from '../recipe-display/recipe-display.jsx';

export default class SectionThree extends React.Component {
    render() {
        if (this.props.recipes === 'vegetables') {
            return (
                <>
                    <RecipeDisplay list={
                        [
                            {
                                image: 'olives',
                                type: <p className="text-primary small"><u><b>Recipe</b></u></p>,
                                title: 'Olivey Bread Salad'
                            },
                            {
                                image: 'wood',
                                type: <p className="text-primary small"><u><b>Recipe</b></u></p>,
                                title: 'Leaves in Wooden Bowl'
                            },
                            {
                                image: 'cutlery',
                                type: <p className="text-primary small"><u><b>Recipe</b></u></p>,
                                title: 'Knife and Forky Salad'
                            }
                        ]
                    }/>
                </>
            )
        } else if (this.props.recipes) {
            return (
                <RecipeDisplay list={
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
            )
        } else {
            return null;
        }
    }
}