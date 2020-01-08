import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';


const MealList = props => {

    const mealDetailHandler = (itemData) => {
        props.navigation.navigate(
            {routeName: 'MealDetail',
            params: {
                mealId: itemData.item.id
            }})
    }

    const renderMealHandler = itemData => {
        return(
            <MealItem 
                itemData = {itemData} 
                onSelectMeal = {mealDetailHandler.bind(this, itemData)} />
        )
    }

    return(
        <View style = {styles.screen}>
            <FlatList 
                data = {props.displayedMeals} 
                renderItem = {renderMealHandler}
                style = {{width: '100%'}}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealList;