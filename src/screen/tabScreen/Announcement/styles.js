import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d0ca'
    },
    viewTotal: {
        paddingHorizontal: '6%'
    },
    viewTitle: {
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
    viewPrincipal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewComments: {
        marginBottom: 20,
        width: '75%'
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
    },
    image: {
        height: 90,
        width: 90
    }
})