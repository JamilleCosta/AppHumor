import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';

export default function Confirmação({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View>
                    <Text style={[styles.texto, styles.atenção]}> Atenção </Text>
                    <Text style={styles.about}> Deseja mesmo sair? </Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Perfil')}
                    >
                        <Text style={[styles.texto, styles.cancelar]}> CANCELAR </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={[styles.texto, styles.sair]}> SIM </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

