import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
    } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import DrawerOption from "../components/Drawer";



const CategoryScreen = props => {

    const navigateHandler = itemData => {
        props.navigation.navigate({
            routeName: "CategoryMeal",
            params: {
                categoryId: itemData.item.id
                }
            });
    }
    const renderGridItem = itemData => {
        return(
            <TouchableOpacity 
                style={{...styles.gridItem, backgroundColor: itemData.item.color}}
                onPress = {navigateHandler.bind(this, itemData)} >
                <View >
                    <Text style = {styles.title} numberOfLines = {2}> {itemData.item.title} </Text>
                </View>
            </TouchableOpacity>
        );
    };


    return (
        <FlatList data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} />
    );
    };

    
    CategoryScreen.navigationOptions = (navigationData) => {
        return {
        headerTitle: 'Meal Categories',
        headerLeft: <DrawerOption navigationData = {navigationData} />
        }
    }
    const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    gridItem: {
        flex: 1,
        borderBottomColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
        height: 100,
        elevation: 15,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 15,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
});

export default CategoryScreen;


