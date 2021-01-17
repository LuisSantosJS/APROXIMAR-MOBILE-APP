import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeCandidato from '../pages/HomeCandidato';

const { Navigator, Screen } = createStackNavigator();

const Candidato: React.FC = () => {
    return (
        <>
            <NavigationContainer>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="HomeCandidato" component={HomeCandidato} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}

export default Candidato;