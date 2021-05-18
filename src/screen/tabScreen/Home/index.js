import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './styles';

function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Novidades</Text>
                </View>
                <View style={styles.viewComments}>
                    <Text style={styles.titleComments}>Piscina Fechada</Text>
                    <Text style={styles.data}>Data: 18/05/2021</Text>
                    <Text style={styles.description}>Devido a nova pandemia a piscina estará fechada novamente</Text>
                </View>

                <View style={styles.viewComments}>
                    <Text style={styles.titleComments}>Piscina Fechada</Text>
                    <Text style={styles.data}>Data: 18/05/2021</Text>
                    <Text style={styles.description}>Devido a nova pandemia a piscina estará fechada novamente</Text>
                </View>

                <View style={styles.viewComments}>
                    <Text style={styles.titleComments}>Piscina Fechada</Text>
                    <Text style={styles.data}>Data: 18/05/2021</Text>
                    <Text style={styles.description}>Devido a nova pandemia a piscina estará fechada novamente</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;