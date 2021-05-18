import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';
import Home from '../screen/tabScreen/Home';
import Announcement from '../screen/tabScreen/Announcement';
import Sales from '../screen/tabScreen/Sales';
import Profile from '../screen/tabScreen/Profile';

import MainStack from '../stack/MainStack';

const Tab = createBottomTabNavigator();

export default function MainTab() {
    return(
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} 
            screenOptions={{
                tabBarVisible: false
            }}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Announcement' component={Announcement} />
            <Tab.Screen name='Sales' component={Sales} />
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='MainStack' component={MainStack}  />
        </Tab.Navigator>
    );
}