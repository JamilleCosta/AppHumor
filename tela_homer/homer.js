import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2  from "react-native-vector-icons/Ionicons";
import Icon3  from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from '../tela_feed/feed';
import styles from './style.js';


export default function Inicio( {navigation} ) {
    return (
        <ScrollView style={styles.geral}>
            <Text style={styles.atividade}> descanso         encontro    filmes e série</Text> 
                <Text style={styles.atividade1}> compras        boa refeição        festa </Text>
                <Text style={styles.atividade2}> esporte           cozinhar             jogos </Text>
                <Text style={styles.situaçãoEmoji}>RADIANTE      FELIZ           OK          TRISTE    ACABADO </Text> 
               
                <TouchableOpacity
                    onPress={() => navigation.navigate(Feed)}
                    style={styles.btnVoltar}
                > 
                    <Icon2 
                        style={styles.iconeVoltar}
                        name="close"
                        size={30}
                        color={'#304FFE'}
                    />
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.taBem}>
                        Como você está?
                    </Text>
                </View>
                <View style={styles.DataHora}> 
                    <View style={styles.corpoDataHora}>
                        <Icon1 
                            style={styles.icon}
                            name='calendar'
                            size={20}
                            color={'#ACACAC'}
                        /> 
                        <Text style={styles.textoDataHora}> HOJE, 23 DE JANEIRO </Text>
                    </View>
        
                    <View style={styles.corpoDataHora}>
                        <Icon
                            style={styles.icon}
                            name="clock" 
                            size={20} 
                            color="#ACACAC" 
                        />
                        <Text style={styles.textoDataHora}> 8:35 </Text>
                    </View>
                </View>
                <View style={styles.containerEmoji}>
                    <View> 
                        <TouchableOpacity>
                            <Image style={styles.imagemEmoji} source={require('../assets/humores/radiant.png')} />
                        </TouchableOpacity>
                    </View>

                    <View> 
                        <TouchableOpacity>
                            <Image style={styles.imagemEmoji} source={require('../assets/humores/happy.png')} />
                        </TouchableOpacity>
                    </View>
                    <View>  
                        <TouchableOpacity>
                            <View> 
                                <Image style={styles.imagemEmoji} source={require('../assets/humores/ok.png')}/> 
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View> 
                        <TouchableOpacity>
                            <Image style={styles.imagemEmoji} source={require('../assets/humores/sad.png')} />
                        </TouchableOpacity>
                    </View>
                    <View> 
                        <TouchableOpacity>
                            <Image style={styles.imagemEmoji} source={require('../assets/humores/terrible.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bordaAtividade}> 
                    <View style={styles.containerAtividade}>
                        <View style={styles.circuloAtividade1}> 
                            <TouchableOpacity>
                                <Icon2 
                                    style={styles.imagemAtividade}
                                    name='ios-bed-sharp'
                                    size={35}
                                    color='black'
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.circuloAtividade2}> 
                            <TouchableOpacity>
                                <Icon2 
                                    style={styles.imagemAtividade}
                                    name='heart-sharp'
                                    size={35}
                                    color='black'
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.circuloAtividade3}>  
                            <TouchableOpacity> 
                                <Icon2 
                                    style={styles.imagemAtividade}
                                    name='md-desktop-sharp'
                                    size={35}
                                    color='black'
                                /> 
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerAtividade}> 
                        <View style={styles.circuloAtividade4}> 
                            <TouchableOpacity>
                                <Icon2 
                                    style={styles.imagemAtividade}
                                    name='cart'
                                    size={35}
                                    color='black'
                                /> 
                            </TouchableOpacity>
                        </View>

                        <View style={styles.circuloAtividade5}>
                            <TouchableOpacity>
                            <Icon2 
                                style={styles.imagemAtividade}
                                name='restaurant-sharp'
                                size={35}
                                color='black'
                            />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.circuloAtividade6}>
                            <TouchableOpacity>
                            <Icon2 
                                style={styles.imagemAtividade}
                                name='beer'
                                size={35}
                                color='black'
                            />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerAtividade}>
                        <View style={styles.circuloAtividade7}>
                            <TouchableOpacity>
                            <Icon2 
                                style={styles.imagemAtividade}
                                name='bicycle-sharp'
                                size={35}
                                color='black'
                            />
                            </TouchableOpacity>
                        </View> 
                        <View style={styles.circuloAtividade8}>
                            <TouchableOpacity>
                            <Icon3 
                                style={styles.imagemAtividade}
                                name='bowl-mix'
                                size={35}
                                color='black'
                            />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.circuloAtividade9}>
                            <TouchableOpacity>
                            <Icon2 
                                style={styles.imagemAtividade}
                                name='game-controller'
                                size={35}
                                color='black'
                            />
                            </TouchableOpacity>
                        </View>
                    </View> 
                </View> 
                
                <View> 
                    <TextInput 
                        style={styles.input}
                        placeholder='Escreva aqui o que aconteceu hoje...'
                        placeholderTextColor={'#969696'}
                        autoCorrect={false}
                        onChangeText={() => {}}
                    />
                </View>
                <View> 
                    <TouchableOpacity 
                        style={styles.botaoSalvar}>
                        <Text style={styles.salvar} >
                            SALVAR
                        </Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>    
    )
}

