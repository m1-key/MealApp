import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';


const CategoryMealScreen = props => {

    const cId = props.navigation.getParam('categoryId');

    const mealDetailHandler = (itemData) => {
        props.navigation.navigate(
            {routeName: 'MealDetail',
            params: {
                mealId: itemData.item.id
            }})
    }

    const renderMealHandler = itemData => {
        return(
            <MealItem itemData = {itemData} onSelectMeal = {mealDetailHandler.bind(this, itemData)} />
        )
    }

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(cId) >= 0
    );


    
    return(
        <View style = {styles.screen}>
            <FlatList data = {displayedMeals} 
                renderItem = {renderMealHandler}
                style = {{width: '100%'}}
            />
        </View>
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


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default CategoryMealScreen;


