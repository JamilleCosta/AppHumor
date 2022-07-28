import React from "react";
import { View, Text, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import styles from "./style.js";

export default function EditarPerfil({navigation}) {
    return (
        <KeyboardAvoidingView>
            <View style={styles.teste}> 
                <Image style={styles.imagem} source={require('../assets/humores/radiant.png')}/>
            </View>
            <View>
                <Text style={styles.info}> NOME </Text>
                <TextInput 
                    style={styles.input}
                    placeholder=' Jamille Costa'
                    placeholderTextColor={'black'}
                />
            </View> 
            <View>
                <Text style={styles.info}> E-MAIL </Text>
                <TextInput
                    style={styles.input}
                    placeholder=' jamillecosta@gmail.com'
                    placeholderTextColor={'black'} 
                />
            </View>
            <View>
                <Text style={styles.info}> GÊNERO </Text>
                <TextInput
                    style={styles.input}
                    placeholder=' Feminino'
                    placeholderTextColor={'black'} 

                />
            </View>
            <View>
                <Text style={styles.info}> DATA DE NASCIMENTO </Text>
                <TextInput 
                    style={styles.input}
                    placeholder=' 27/09/2003'
                    placeholderTextColor={'black'}
                />
            </View>
            <TouchableOpacity 
                style={styles.btnAlterarFoto}
                onPress={() => navigation.navigate('Fotos')}
            >
                <Text style={styles.alterarFoto}> ALTERAR FOTO </Text>
            </TouchableOpacity>

           <TouchableOpacity 
                style={styles.btnSalvar}
                onPress={() => navigation.navigate('Perfil')}
            >
                 <Text style={styles.salvar} >
                   SALVAR
                 </Text>
        </TouchableOpacity> 
        </KeyboardAvoidingView>
    )
}

