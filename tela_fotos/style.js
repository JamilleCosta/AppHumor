import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    btnVoltar: {
        backgroundColor: 'rgba(48, 79, 254, 0.14)',
        width: 50,
        left: 30,
        height: 40,
        top: 30,
        borderRadius: 10
    },
    icone: {
        left: 10,
        top: 4
    },
    texto: {
        color: '#000000',
        fontSize: 20,
        position: 'absolute',
        alignItems: 'center',
        textAlign: 'center',
        left: 50,
        top: 110,
    },
    fotos: {
        width: 80,
        height: 80,
        left: 50,
        top: 200,
        margin: 10,
        //overflow: "hidden", 
        //borderRadius: 40,
        //borderWidth: 1.5,
        //borderColor: "#000000"
    },
    teste: {
        flexDirection: 'row',
    },
    btnConfirmar: {
        backgroundColor: '#304FFE',
        width: 310,
        height: 52,
        left: 40,
        borderRadius: 10,
        top: 450,
    },
    confirmar: {
        color: '#FFFFFF',
        fontSize: 15,
        left: 100,
        top: 10
    },
})

export default styles;