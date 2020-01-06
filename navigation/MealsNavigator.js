import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouriteScreen from "../screens/FavoriteScreen";

import Colors from "../constants/Colors";


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoryScreen,
        navigationOptions: {
        headerStyle: {
            backgroundColor: Colors.secondary
        },
        headerTintColor: "white"
        }
    },
    CategoryMeal: {
        screen: CategoryMealScreen,
        navigationOptions: {
        headerTintColor: "white"
        }
    },
    MealDetail: MealDetailScreen
});

const tabScreen = {      
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
            return (
                <Ionicons
                name="ios-restaurant"
                size={25}
                color={tabInfo.tintColor}
                />
                );
            }
        }
    },

    Favourites: {
        screen: FavouriteScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
            return (
                <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            );
            }
        }
    }
}

const MealsFavTabNavigator = Platform.OS === 'android' ? 
    createMaterialBottomTabNavigator(
        tabScreen,
        {
            activeTintColor: Colors.tertiary,
            shifting: false
        }
    )
    :
    createBottomTabNavigator(
    tabScreen,
    {
        tabBarOptions: {
        activeTintColor: Colors.accent
        }
    }
);

export default createAppContainer(MealsFavTabNavigator);
