import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';

import { styles } from './styles';

import hamburger from '../../../assets/hamburguer.png';

function Announcement() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.viewTotal}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Anuncios</Text>
                </View>

                <View style={styles.viewPrincipal}>
                    <View style={styles.viewComments}>
                        <Text style={styles.titleComments}>Deliciosos Hamburgueres</Text>
                        <Text style={styles.data}>Hamburguer sensacional com queijo tipo Cheddar, bacon e maionese caseira</Text>
                        <Text style={styles.description}>Preço: R$23,50</Text>
                    </View>
                    <Image source={hamburger} style={styles.image} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Announcement;