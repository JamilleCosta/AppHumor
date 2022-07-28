import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    teste: {
        color: 'black',
        fontSize: 20
    },
    geral: {
        flex: 1,
    },
    corpo: {
        background: '#F5F5F5',
    },
    btnVoltar: {
        position: 'absolute',
        backgroundColor: 'rgba(48, 79, 254, 0.14)',
        width: 40,
        left: 20,
        height: 40,
        top: 30,
        borderRadius: 10
    },
    iconeVoltar: {
        left: 5,
        top: 4
    },
    taBem: {
        position: 'relative',
        width: 258,
        left: 70,
        top: 20,
        color: 'black',
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontSize: 28,
        textAlign: 'center',
        letterSpacing: -1.5,
    },

    icon: {
        flexDirection: 'row',
        width: 50,
        left: 60,
        top: 23,   
    },
    textoDataHora: {
        left: 35,
        top: 20,
        color: '#ACACAC',
        fontFamily: 'Source Sans Pro',
        fontStyle: 'normal',
        fontSize: 15,
        textAlign: 'center',
        letterSpacing: -1.5,
    },
    corpoDataHora: {
        flexDirection: 'row',     
    }, 

    DataHora: {
        flexDirection: 'row',   
    },
    situaçãoDel: { 
        color: '#969696',
    },
    imagemEmoji: { 
        position: 'relative',
        width: 50,
        height: 50,
        left: 25,
        top: 60,
        //borderRadius: 30,
        //borderWidth: 2,
        //borderColor: "#000000", 
        margin: 10 
    },
    imagemAtividade: {
        position: 'relative',
        width: 50,
        height: 50,
        margin: 6,
        top: 10,
        left: 10
        
    },
    bordaAtividade: { 
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#000000",
        top: 140,
        left: 18,
        width: 354,
        height: 400
    },   
    containerEmoji: {
        flexDirection: 'row',
    }, 
    containerAtividade: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: '#F5F5F5', 
        color: '#969696',
        fontSize: 14,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#000000",
        width: 340,
        height: 110,
        left: 25,
        padding: 10,  
        top: 145,
    }, 
    situaçãoEmoji: {
        color: '#000000',
        fontSize: 11,
        top: 230,
        left: 24,
    },
    atividade: {
        color: '#000000',
        top: 475,
        left: 35
    },
    atividade1: {
        color: '#000000',
        top: 575,
        left: 35
    },
    atividade2: {
        color: '#000000',
        top: 665,
        left: 45
    },
    botaoSalvar: {
        backgroundColor: '#304FFE',
        width: 340,
        height: 52,
        left: 25,
        borderRadius: 10,
        top: 100,
    },
    salvar: {
        color: '#FFFFFF',
        fontSize: 15,
        left: 135,
        top: 10
    },
    circuloAtividade1: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 25,
        top: 12,
    },
    circuloAtividade2: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 80,
        top: 12,
    },
    circuloAtividade3: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 125,
        top: 12,
    },
    circuloAtividade4: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 20,
        top: 65,
    },
    circuloAtividade5: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 75,
        top: 65,
    },
    circuloAtividade6: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 125,
        top: 65,
    },
    circuloAtividade7: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 25,
        top: 115,
    },
    circuloAtividade8: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 80,
        top: 115,
    },
    circuloAtividade9: {
        borderRadius: 100,
        borderWidth: 1,
        height: 70,
        width: 70,
        left: 127,
        top: 115,
    },
}) 

export default styles;