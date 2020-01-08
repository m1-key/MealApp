import React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from "@expo/vector-icons";

import CategoryScreen from "../screens/CategoryScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouriteScreen from "../screens/FavoriteScreen";
import FilterScreen from "../screens/FilterScreen";

import Colors from "../constants/Colors";

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Colors.secondary
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    headerTintColor: "white"
    }

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoryScreen,
        navigationOptions: defaultNavOptions
    },
    CategoryMeal: {
        screen: CategoryMealScreen,
        navigationOptions: {
            headerTintColor: "white",
            headerTitleStyle: {
                fontFamily: 'open-sans-bold',
                textAlign: 'center'
            }
        }
    },
    MealDetail: MealDetailScreen
});

const FavNavigator = createStackNavigator({
    Favourites: FavouriteScreen,
    MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

const FilterNavigator = createStackNavigator({
    Filters: FilterScreen
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
);

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
        screen: FavNavigator,
        navigationOptions: {
            headerTitle: "Your Favourite",
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

const drawerNavigation = createDrawerNavigator(
    {
        Meals: MealsFavTabNavigator,
        Filters: FilterNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.secondary,
            labelStyle: {
                fontFamily: 'open-sans-bold',
                fontSize: 18
            }
        }
    }
);

export default createAppContainer(drawerNavigation);
