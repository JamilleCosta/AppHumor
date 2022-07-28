import React from "react";
import { KeyboardAvoidingView, View, Text, TouchableOpacity, Image } from "react-native";
import Icon  from "react-native-vector-icons/Ionicons";
import EditarPerfil from "../tela_editarPerfil/editarPerfil";
import styles from "./style.js";

export default function Fotos({navigation}) {
    return (
        <KeyboardAvoidingView> 
            <TouchableOpacity
                onPress={() => navigation.navigate(EditarPerfil)}
                style={styles.btnVoltar}
            > 
                <Icon 
                    style={styles.icone}
                    name="close"
                    size={30}
                    color={'#304FFE'}
                />
            </TouchableOpacity>
            <View>
                <Text style={styles.texto}>
                    Selecione a foto de perfil
                </Text>
            </View>

            <View style={styles.teste}>
                <TouchableOpacity>
                    <Image style={styles.fotos} source={require('../assets/humores/happy.png')} />
                </TouchableOpacity>

                <View style={styles.teste}> 
                    <TouchableOpacity>
                        <Image style={styles.fotos} source={require('../assets/humores/sad.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.teste}>  
                    <TouchableOpacity>
                        <View style={styles.teste}> 
                            <Image style={styles.fotos} source={require('../assets/humores/terrible.png')}/> 
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.teste}> 
                <TouchableOpacity>
                    <Image style={styles.fotos} source={require('../assets/humores/ok.png')} />
                </TouchableOpacity>

                <View style={styles.teste}>
                    <TouchableOpacity>
                        <Image style={styles.fotos} source={require('../assets/humores/radiant.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image style={styles.fotos} source={require('../assets/humores/happy.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            
            <View> 
                <TouchableOpacity 
                    onPress={() => navigation.navigate(EditarPerfil)}
                    style={styles.btnConfirmar}                
                >
                    <Text style={styles.confirmar} >
                        CONFIRMAR
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

