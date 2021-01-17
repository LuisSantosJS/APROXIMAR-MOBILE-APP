import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeEmpresa from '../pages/HomeEmpresa';

const { Navigator, Screen } = createStackNavigator();

const Empresa: React.FC = () => {
    return (
        <>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="HomeEmpresa" component={HomeEmpresa} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}

export default Empresa;