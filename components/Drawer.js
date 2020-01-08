import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const DrawerOption = props => {

    const onPressDrawerHandler = (navigationData) => {
        navigationData.navigation.toggleDrawer();
    }

    return (
        <HeaderButtons HeaderButtonComponent = {HeaderButton}>
            <Item title = "Menu" iconName = "ios-menu" onPress = {onPressDrawerHandler.bind(this,props.navigationData)} />
        </HeaderButtons>
    )
}

export default DrawerOption;
