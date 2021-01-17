import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCandidato from '../pages/HomeCandidato';
import Perfil from '../pages/Perfil';

const { Navigator, Screen } = createStackNavigator();

const Empresa: React.FC = () => {
    return (
        <>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="HomeCandidato" component={HomeCandidato} />
                    <Screen name="Perfil" component={Perfil} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}

export default Empresa;