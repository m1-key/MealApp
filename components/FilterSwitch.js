import React from 'react';
import { View, Text, StyleSheet, Switch} from "react-native";
import Colors from '../constants/Colors';


const FilterSwitch = props => {
    return(
        <View style = {styles.filterContainer} >
                <Text style = {styles.text}>{props.label}</Text>
                <Switch 
                    value = {props.state} 
                    onValueChange = {props.onChange}
                    trackColor = {{true: Colors.primary}}
                    thumbColor = "white"
                    />
            </View>
    )
};

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 10
    },
    text: {
        fontFamily: "open-sans",
        fontSize: 16
    }

});

export default FilterSwitch;