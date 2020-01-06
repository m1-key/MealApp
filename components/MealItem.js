import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Meal from '../models/Meal';

const MealItem = props => {
    return(
        <View style = {styles.mealItem}>
            <TouchableOpacity onPress = {props.onSelectMeal}>
                <View>
                    <View style = {styles.mealHeader}>
                        <ImageBackground 
                            source = {{uri: props.itemData.item.imageUrl}} 
                            style = {styles.imageStyle }>
                            <Text style = {styles.text}>{props.itemData.item.title}</Text>
                            </ImageBackground>
                    </View>
                    <View style = {styles.mealDetail}>
                        <Text>{props.itemData.item.duration} mins</Text>
                        <Text>{props.itemData.item.complexity.toUpperCase()}</Text>
                        <Text>{props.itemData.item.affordability.toUpperCase()}</Text>

                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '95%',
        backgroundColor: '#f5f5f5',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        textAlign: 'center'
    }
});

export default MealItem;