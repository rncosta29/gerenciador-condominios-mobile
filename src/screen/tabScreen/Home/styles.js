import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d0ca'
    },
    viewTitle: {
        paddingHorizontal: '6%',
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2f3d4c'
    },
    viewComments: {
        paddingHorizontal: '6%',
        marginBottom: 20
    },
    titleComments: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    data: {
        fontSize: 16,
        marginTop: 10
    },
    description: {
        fontSize: 16,
        textAlign: 'justify'
    }
})