import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

    const cId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(cId) >= 0
    );


    
    return(
        <MealList displayedMeals = {displayedMeals} navigation = {props.navigation}/>
        
    );
};


CategoryMealScreen.navigationOptions = navigationData => {
    const cId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === cId);

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: selectedCategory.color
        },
    }
}




export default CategoryMealScreen;


