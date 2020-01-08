import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DrawerOption from "../components/Drawer";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import Card from '../Template/Card';

const FilterScreen = props => {
    const { navigation } = props
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVeganFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const filterValues = useCallback(() => {
        const filterState = {
            glutenFree : isGlutenFree,
            lactoseFree : isLactoseFree,
            vegan : isVegan,
            vegetarian: isVegetarian
        }
        console.log(filterState)
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({save : filterValues})
    }, [filterValues])

    return(
        <View style = {styles.screen}>
            <Text style = {styles.title}>Filters Available : </Text>
            <Card style = {{width: "80%"}}>
                <FilterSwitch 
                    label = "Gluten Free"
                    state = {isGlutenFree}
                    onChange = {newValue => setIsGlutenFree(newValue)}
                    />
                <FilterSwitch 
                    label = "Vegan "
                    state = {isVegan}
                    onChange = {newValue => setIsVeganFree(newValue)}
                    />
                <FilterSwitch 
                    label = "Vegeterian"
                    state = {isVegetarian}
                    onChange = {newValue => setIsVegetarian(newValue)}
                    />
                <FilterSwitch 
                    label = "Lactose Free"
                    state = {isLactoseFree}
                    onChange = {newValue => setIsLactoseFree(newValue)}
                    />
            </Card>
        </View>
    )
};

FilterScreen.navigationOptions = navigationData => {
    return {
        headerTitle: "Filters",
        headerLeft : <DrawerOption navigationData = {navigationData} />,
        headerRight :   <HeaderButtons HeaderButtonComponent = {HeaderButton}>
                            <Item 
                                title = "Save" 
                                iconName = "ios-save" 
                                onPress = {navigationData.navigation.getParam("save")}
                                />
                        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },

    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center",
        margin: 20
    }

});

export default FilterScreen;