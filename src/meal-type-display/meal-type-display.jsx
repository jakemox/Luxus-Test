import React from 'react';
import MealTypeCard from '../meal-type-card/meal-type-card.jsx';
import SectionThree from '../section-three/section-three.jsx';


const mealTypes = [
    {
        image: "breakfast",
        title: "Breakfast & Brunch"
    },
    {
        image: "popcorn",
        title: "Appetizers & Snacks"
    },
    {
        image: "vegetables",
        title: "Lunch & Salads"
    },
    {
        image: "chicken",
        title: "Dinner"
    },
    {
        image: "cake",
        title: "Desserts"
    },
    {
        image: "cocktail",
        title: "Drinks & Smoothies"
    }
];

export default class MealTypeDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: null
        };
    }

    changeSelected = (data) => {
        console.log('parent' + data.selected);
        this.setState({
            selected: data.selected
        })
    }

    render() {
        return (
            <>
                <p className="text-center w-100 h3 bg-success py-4 text-white">What do you want to cook today?</p>
                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            {mealTypes.map
                            (
                                (mealType, i) =>
                                <MealTypeCard 
                                    key={i}
                                    image={mealType.image}
                                    title={mealType.title}
                                    action={this.changeSelected}
                                    color={this.state.selected === mealType.image ? 'clicked-meal-type' : 'card-meal-types'}
                                />
                            )}
                        </div>
                    </div>
                </section>
                <SectionThree recipes={this.state.selected}/>
            </>
        )
    }
}