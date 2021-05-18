import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import cond from '../../assets/cond.png';

function Cadastro() {

    const navigation = useNavigation();

    const cadastrar = () => {
        navigation.reset({
            routes: [{ name: 'MainTab' }]
        });
    }

    const telaLogin = () => {
        navigation.reset({
            routes: [{ name: 'Main' }]
        })
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
                    placeholder='Nome'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='E-mail'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Senha'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirmar Senha'
                />
                <TouchableOpacity style={styles.buttonLogin} onPress={ cadastrar }>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ telaLogin }>
                    <Text>Já tem cadastro? Clique aqui e faça o Login!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Cadastro;