import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, .1)',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    background: {
        backgroundColor: 'white',
        width: '90%',
        height: '27%',
        borderRadius: 25,
        padding: 20,
        justifyContent: 'space-between'
    },
    texto: {
        color: '#000000'
    },
    cancelar: {
        fontSize: 16,
        lineHeight: 27,
        right: 40
    },
    sair: {
        fontSize: 16,
        lineHeight: 27,
        right: 15

    },
    atenção: {
        fontSize: 24,
        lineHeight: 36
    },
    about: {
        color: '#969696',
        fontSize: 20,
        lineHeight: 30
    },
    footer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: '45%',
        justifyContent: 'space-between'
    }, 
})

export default styles; 