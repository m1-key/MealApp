import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../Template/Card";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId");

    const [selectedMeal] = MEALS.filter(meal => meal.id === mealId);
    console.log(selectedMeal.ingredients);

    
    return (
        <ScrollView>
            <Image source = {{uri: selectedMeal.imageUrl}} style = {styles.image}/>
            <View style={styles.mealDetail}>
                <Text>{selectedMeal.duration} mins</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <View style = {{paddingHorizontal: 10}}>
                <Text style = {styles.textTitle}>Ingredients:</Text>
            </View>
            <View style = {{padding: 20, paddingTop: 10}}>
                <Card style = {{width: '100%' , backgroundColor: '#fdfee0'}}>
                {selectedMeal.ingredients.map(ingredient => (
                    <View key = {ingredient} style = {{flexDirection : 'row'}} >
                        <Text style = {styles.detailsText} > {'\u2022'}{ingredient}</Text>
                    </View>
                ))}
                </Card>
            </View>
            <View style = {{paddingHorizontal: 10}}>
                <Text style = {styles.textTitle}>Steps:</Text>
            </View>
            <View style = {{padding: 20, paddingTop: 10}}>
                <Card style = {{width: '100%' , backgroundColor: '#fdfee0'}}>
                {selectedMeal.steps.map(step => (
                    <View key = {step} style = {{flexDirection : 'row'}} >
                        <Text style = {styles.detailsText} >{'\u2022'} {step}</Text>
                    </View>
                ))}
                </Card>
            </View>
        </ScrollView>
    );
    };

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam("mealId");
    const [selectedMeal] = MEALS.filter(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerStyle: {
        backgroundColor: "#f7287b"
        },
        headerTitleStyle: {
        fontFamily: "open-sans-bold"
        },
        headerTintColor: "white",
        headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
            title="Favourite"
            iconName="ios-star"
            onPress={() => {
                console.log("Added");
            }}
            />
        </HeaderButtons>
        )
    };
    };

    const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    mealDetail: {
        flex: 1,
        padding: 15, 
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    detailsText: {
        fontFamily: 'open-sans',
        fontSize: 14,
        padding: 5 
    }
    });

export default MealDetailScreen;
