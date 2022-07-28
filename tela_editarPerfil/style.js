import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imagem: {
        width: 130,
        height: 130,
        left: 130,
        top: 60,
    },

    btnAlterarFoto: {
        position: 'absolute',
        backgroundColor: 'rgba(48, 79, 254, 0.14)',
        borderRadius: 10,
        width: 240,
        height: 60,
        left: 80,
        top: 230
        
    },
    alterarFoto: {
        fontSize: 13,
        color: '#304FFE',
        left: 55,
        top: 17
    },
    
    info: {
        fontSize: 11,
        color: 'black',
        top: 200,
        left: 32,
        margin: 5
    },

    input: {
        backgroundColor: '#FFFFFF',
        left: 40,
        width: 310,
        top: 200, 
        color: '#000000',
        overflow: "hidden", 
        borderWidth: 1.5,
        borderColor: "#000000"
    },
    
    btnSalvar: {
        backgroundColor: '#304FFE',
        width: 310,
        height: 52,
        left: 40,
        borderRadius: 10,
        top: 250,
    },
    salvar: {
        color: '#FFFFFF',
        fontSize: 15,
        left: 120,
        top: 10
    },

})

export default styles;