import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    totalView: {
        flex: 1,
        backgroundColor: '#d1d0ca'
    },
    container: {
        paddingHorizontal: '6%',
        marginTop: 20
    },
    viewTitle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        color: '#2f3d4c',
        fontWeight: 'bold'
    },
    viewInput: {
        marginTop: 70
    },
    input: {
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    viewButton: {
        marginTop: 30,
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 30,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32CD32'
    },
    textButton: {
        color: '#fff',
        fontSize: 18
    }
});