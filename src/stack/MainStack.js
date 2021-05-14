import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../screen/Main';
import Cadastro from '../screen/Cadastro';


export default function MainStack() {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator
            initialRouteName = 'Main'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
        </Stack.Navigator>
    )
}