import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    fundo: {
        width: 350,
        height: 165,
        left: 18,
        padding: 5,
        backgroundColor: '#FFFFFF',
        marginTop: 25,
        borderRadius: 25,  
    },
    emoji: {
        width: 50,
        height: 50,
        top:10

    },

    data: {
        fontSize: 14,
        color: '#ACACAC'
    },

    headerWrapper: {
        flexDirection: 'row',
        top: 10

    },

    humorWrapper: {
        flexDirection: 'row',

    },

    humor: {
        fontSize: 20, 
        fontFamily: 'Source Sans Pro',
        color: 'black',
    },

    hora: {
        fontSize: 14,
        top: 9,
        margin: 4,
        right: 10,
        color: '#ACACAC'
    },

    icones: {
        flexDirection: 'row',
        top: 8,
        left: 10
    },

    atividade: {
        color: '#000000',
        fontSize: 13,
    }, 
    
    texto: {
        color: '#ACACAC',
        top: 25,
        left: 6,
        fontSize: 13
    }   
})

export default styles;