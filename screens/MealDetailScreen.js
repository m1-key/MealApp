import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');

    const [selectedMeal] = MEALS.filter(meal => meal.id === mealId)
    console.log(selectedMeal.title)

    const goToCatrgoriesHandler = () => {
        props.navigation.popToTop();
    }
    return(
        <View style = {styles.screen}>
            <Text>
                {selectedMeal.title}
            </Text>
            <Button title = 'Go to Categories' onPress = {goToCatrgoriesHandler} />
        </View>

    )
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const [selectedMeal] = MEALS.filter(meal => meal.id === mealId);
    
    return{
        headerTitle: selectedMeal.title,
        headerStyle: {
            backgroundColor: '#f7287b'
        },
        headerTintColor: 'white',
        headerRight: <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item 
                title = 'Favourite' 
                iconName = 'ios-star'
                onPress = {() => {console.log('Added')}}/>
        </HeaderButtons>
    }
    
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default MealDetailScreen;