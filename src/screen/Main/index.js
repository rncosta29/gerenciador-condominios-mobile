import React from 'react';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import cond from '../../assets/cond.png';

function Main() {
    const navigation = useNavigation();

    const logar = () => {
        navigation.reset({
            routes: [{ name: 'Cadastro' }]
        });
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Image source={cond} style={styles.image} />
                <Text style={styles.textTitle}>Gerenciador de Condominios</Text>
            </View>

            <View style={styles.viewLogin}>
                <Text style={styles.titleLogin}>Faça Login ou Cadastre-se para visualizar tudo sobre o seu condominio</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='E-mail'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Senha'
                />
                <TouchableOpacity style={styles.buttonLogin} onPress={ logar }>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCadastro}>
                    <Text>Não tem cadastro? Clique aqui!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Main;