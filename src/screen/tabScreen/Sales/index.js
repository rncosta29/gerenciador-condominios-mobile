import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

function Sales() {
    return(
        <SafeAreaView style={styles.totalView}>
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Faça seu próprio anuncio</Text>
                </View>
                <View style={styles.viewInput}>
                    <TextInput
                        placeholder='Titulo'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Descrição'
                        style={styles.input}
                        multiline={true}
                    />
                    <TextInput
                        placeholder='Preço'
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.viewButton}>
                    <Text style={styles.textButton}>Cadastrar Anuncio</Text>
                </TouchableOpacity>
                    
            </View>
        </SafeAreaView>
    );
}

export default Sales;