import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    corpo: {
        backgroundColor: '#F5F5F5'
    },
    imagem: {
        width: 130,
        height: 130,
        left: 135,
        top: 70,
    },
    ola: {
        color: '#000000',
        fontFamily: 'Source Sans Pro',
        fontSize: 25,
        left: 60,
        top: 100,
    },
    informação: { 
        color: '#000000',
        fontSize: 13,
        left: 30,
        top: 140,    
    }, 
    dados: {
        color: '#969696',
        fontSize: 15,
        left: 30,
        top: 137, 
    },
    teste: {
        flexDirection: 'row'
    },
    btnEditarPerfil: {
        backgroundColor: '#304FFE',
        width: 335,
        height: 52,
        left: 30,
        top: 200,
        borderRadius: 7,
    },
    editar: {
        color: '#FFFFFF',
        fontSize: 15,
        left: 100,
        top: 10
    },
    btnSair: {
        backgroundColor: '#FFFFFF',
        width: 335,
        height: 52,
        left: 30,
        borderRadius: 7,
        top: 220,
        overflow: 'hidden', 
        borderWidth: 2,
        borderColor: '#000000'
    },
    sair: {
        color: '#000000',
        fontSize: 15,
        left: 135,
        top: 10,
        borderColor: '#000000',
    },
})

export default styles;