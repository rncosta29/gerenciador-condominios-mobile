import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';

import MainStack from './src/stack/MainStack';

export default function App() {
    return (
        <>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
            <View style={{
                height: 110,
                backgroundColor: '#000',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{fontSize: 16, color: '#d1d0ca'}}>App desenvolvido por Rafael Costa</Text>
            </View>
        </>
    );
}
