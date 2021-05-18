import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import IconHome from 'react-native-vector-icons/FontAwesome';
import IconSale from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnnouncement from 'react-native-vector-icons/MaterialIcons';
import IconsProfile from 'react-native-vector-icons/AntDesign';

export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return(
        <View style={styles.tabArea}>
            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Home')}>
                <IconHome name='home' size={30} style={{opacity: state.index === 0? 1 : 0.5}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Announcement')}>
                <IconAnnouncement name='announcement' size={30} style={{opacity: state.index === 1? 1 : 0.5}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Sales')}>
                <IconSale name='sale' size={30} style={{opacity: state.index === 2? 1 : 0.5}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem} onPress={() => goTo('Profile')}>
                <IconsProfile name='profile' size={30} style={{opacity: state.index === 3? 1 : 0.5}} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tabArea: {
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});