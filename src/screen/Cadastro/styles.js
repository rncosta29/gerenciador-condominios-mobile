import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d0ca'
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        height: 100,
        width: 150
    },
    textTitle: {
        fontSize: 22,
        marginTop: 10
    },
    viewLogin: {
        marginTop: 120,
        marginHorizontal: '6.5%',
        justifyContent:'center',
        alignItems: 'center',
    },
    titleLogin: {
        marginBottom: 20,
        fontSize: 15
    },
    textInput: {
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 20,
        height: 40,
        width: '100%',
        paddingHorizontal: 12
    },
    buttonLogin: {
        marginTop: 30,
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 20,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2f3d4c'
    },
    textButton: {
        fontSize: 18,
        color: '#dad0ca'
    },
})