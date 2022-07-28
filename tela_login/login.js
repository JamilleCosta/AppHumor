import React from 'react';
import { KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from "./style.js";

export default function Login({navigation}) {
  const entrar = () => {
      navigation.reset({
      index: 0,
      routes: [{name: 'Homer'}]
    })
  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogin}>
        <Image style={styles.imagemLogin} source={require('./login.png')} /> 
      </View>
      
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder='E-mail'
        placeholderTextColor={'#969696'}
        autoCorrect={false}
        onChangeText={() => {}}
        /> 
        <TextInput
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor={'#969696'}
        autoCorrect={false}
        onChangeText={() => {}}
        /> 
        <TouchableOpacity 
          onPress={() =>  entrar()}
          style={styles.botao}>
          <Text style ={styles.texto} >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

