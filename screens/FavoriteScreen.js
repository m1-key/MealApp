import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import DrawerOption from "../components/Drawer";

const FavoriteScreen = props => {

    const favMeals = MEALS.filter(meals => meals.id === 'm1' || meals.id === 'm3')
    console.log(favMeals)
    return(
        <MealList displayedMeals = {favMeals} navigation = {props.navigation}/>

    )
};

FavoriteScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Your Favourite",
        headerLeft : <DrawerOption navigationData = {navigationData} />
    }
    }


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default FavoriteScreen;