import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Wellcome from '../pages/Wellcome'
const { Navigator, Screen } = createStackNavigator();

const Auth: React.FC = () => {
    
    return (
        <NavigationContainer>
            <Navigator initialRouteName={'Wellcome'} screenOptions={{ headerShown: false }}>
                
                <Screen name="Wellcome" component={Wellcome} />
    
            </Navigator>
        </NavigationContainer>

    )

}

export default Auth;