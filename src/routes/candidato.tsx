import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchSofts from '../pages/SearchSofts';

const { Navigator, Screen } = createStackNavigator();

const Candidato: React.FC = () => {
    return (
        <>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="SearchSofts" component={SearchSofts} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}

export default Candidato;