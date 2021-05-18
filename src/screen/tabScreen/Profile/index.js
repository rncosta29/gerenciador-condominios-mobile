import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import { styles } from './styles';

function Profile() {
    const navigation = useNavigation();
    const goTo = () => {
        navigation.reset({
            routes: [{name: 'Main'}]
        })
    }
    return(
        <SafeAreaView style={styles.totalView}>
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Profile</Text>
                </View>
                <View style={styles.viewProfile}>
                    <Text style={styles.description}>Nome: Eu eu mesmo e Irene</Text>
                    <Text style={styles.description}>Telefone: (11)99999-9999</Text>
                    <Text style={styles.description}>Torre 5 ap 99</Text>
                    <Text style={styles.description}>E-mail</Text>
                </View>
                <TouchableOpacity style={styles.viewButton} onPress={ goTo }>
                    <Text style={styles.textButton}>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Profile;