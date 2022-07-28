import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#304FFE'
    },
  
    containerLogin: {
      justifyContent: 'center', 
    
    },
  
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
      
    }, 
  
    input: {
      backgroundColor: '#F7F7F7', 
      color: '#969696',
      width: 321,
      height: 50,
      marginBottom: 20,
      fontSize: 14,
      borderRadius: 10,
      padding: 15,  
    },
    botao: {
      backgroundColor: '#C6CEFF',
      width: 133,
      height: 46,
      borderRadius: 10,
      top: 40
    },
  
     imagemLogin: {
      width: 228,
      height: 228,
      top: 100
      
    },
    texto: {
      color: '#304FFE',
      fontSize: 15,
      lineHeight: 19,
      width: 56,
      left: 40,
      top: 9
      
    }
  });

export default styles;