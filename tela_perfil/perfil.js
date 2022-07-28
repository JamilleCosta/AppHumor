import React from "react";
import { KeyboardAvoidingView, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from "./style.js";

export default function Perfil({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.corpo} >
            <View> 
                <Image style={styles.imagem} source={require('../assets/humores/radiant.png')}/>
            </View>
            <View>
                <Text style={styles.ola}>
                    Olá, Jamille Costa!
                </Text>
            </View>
            <View style={styles.teste}>
                <Text style={styles.informação}> EMAIL: </Text><Text style={styles.dados}> jamillecosta@gmail.com </Text>  
            </View>  
            <View style={styles.teste}> 
                  <Text style={styles.informação}> GÊNERO: </Text><Text style={styles.dados}> Feminino </Text> 
            </View>  
            <View style={styles.teste}> 
                <Text style={styles.informação}> DATA DE NASCIMENTO: </Text><Text style={styles.dados}> 27/09/2003 </Text> 
            </View>
            
            <TouchableOpacity 
                onPress={() => navigation.navigate('EditarPerfil')}
                style={styles.btnEditarPerfil}
                >
                <Text style={styles.editar}> EDITAR PERFIL </Text>
            </TouchableOpacity>  
            <TouchableOpacity 
                style={styles.btnSair}
                onPress={() => navigation.navigate('Confirmação')}
            >
                <Text style={styles.sair}> SAIR </Text>
            </TouchableOpacity>  
        </KeyboardAvoidingView> 
    )
}
