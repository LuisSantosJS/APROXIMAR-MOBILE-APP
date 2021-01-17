import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Wellcome from '../pages/Wellcome'
import LoginEmpresa from '../pages/LoginEmpresa';
import LoginCandidato from '../pages/LoginCandidato';
const { Navigator, Screen } = createStackNavigator();

const Auth: React.FC = () => {

    return (
        <NavigationContainer>
            <Navigator initialRouteName={'Wellcome'} screenOptions={{ headerShown: false }}>
                <Screen name="Wellcome" component={Wellcome} />
                <Screen name="LoginEmpresa" component={LoginEmpresa} />
                <Screen name="LoginCandidato" component={LoginCandidato} />
            </Navigator>
        </NavigationContainer>

    )

}

export default Auth;