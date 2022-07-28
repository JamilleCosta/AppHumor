import React from "react";
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./style.js";

const listaEmojis = [
    {
        id: 1,
        image: require('../assets/humores/happy.png'),
        data: 'HOJE, 23 DE JANEIRO',
        humor: 'BEM',
        hora: '8:35',
        icone: { primeiro: "md-ice-cream", segundo: "ios-baseball-sharp", terceiro: "md-book" },
        atividade: { primeiro: "sorvete", segundo: "esporte", terceiro: "leitura" },
        about: 'Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo.'
    },
    {
        id: 2,
        image: require('../assets/humores/terrible.png'),
        data: 'ONTEM, 22 DE JANEIRO',
        humor: 'MAL',
        hora: '8:35',
        icone: { primeiro: "ios-bicycle-sharp", segundo: "md-headset-sharp", terceiro: "pizza" },
        atividade: { primeiro: "ciclismo", segundo: "música", terceiro: "comida" },
        about: 'Lorem Ipsum Dolor Sit.'
    },
    {
        id: 3,
        image: require('../assets/humores/sad.png'),
        data: '21 DE JANEIRO',
        humor: 'TRISTE',
        hora: '8:35',
        icone: { primeiro: "ios-cart", segundo: "md-cut-sharp", terceiro: "md-fast-food-sharp" },
        atividade: { primeiro: "compras", segundo: "artesanato", terceiro: "lanche" },
        about: 'Lorem Ipsum Dolor Sit.'
    },
    {
        id: 4,
        image: require('../assets/humores/happy.png'),
        data: '20 DE JANEIRO',
        humor: 'BEM',
        hora: '8:35',
        icone: { primeiro: "ios-construct", segundo: "md-chatbubbles", terceiro: "md-color-palette-sharp" },
        atividade: { primeiro: "trabalho", segundo: "conversa", terceiro: "pintura" },
        about: 'Lorem Ipsum Dolor Sit.'
    },
    {
        id: 5,
        image: require('../assets/humores/happy.png'),
        data: '19 DE JANEIRO',
        humor: 'BEM',
        hora: '8:35',
        icone: { primeiro: "ios-game-controller", segundo: "md-barbell", terceiro: "md-cafe" },
        atividade: { primeiro: "jogos", segundo: "musculação", terceiro: "café" },
        about: 'Lorem Ipsum Dolor Sit.'
    },
    {
        id: 6,
        image: require('../assets/humores/happy.png'),
        data: '18 DE JANEIRO',
        humor: 'BEM',
        hora: '8:35',
        icone: { primeiro: "ios-partly-sunny-sharp", segundo: "ios-restaurant", terceiro: "md-american-football" },
        atividade: { primeiro: "passeio", segundo: "restaurante", terceiro: "jogo" },
        about: 'Lorem Ipsum Dolor Sit.'
    }

] 

const Item = ({ image, data, humor, hora, icone, atividade, about, onPress}) => (
    <TouchableOpacity style={styles.fundo} onPress={onPress}>
        <View style={styles.headerWrapper}>
            <Image style={styles.emoji} source={image} />
            <View>
                <Text style={styles.data}> {data} </Text>
                <View style={styles.humorWrapper}>
                    <Text style={[styles.humor, {color: cores[humor]}]}> {humor} </Text>
                    <Text style={styles.hora}> {hora} </Text>
                </View>
      
            </View>
        </View>
        <View style={styles.headerWrapper}>
            <View style={styles.icones}>
                <Icon name={icone.primeiro} size={19} color='black' />
                <Text style={styles.atividade}> {atividade.primeiro} </Text>
            </View>
            <View style={styles.icones}>
                <Icon name={icone.segundo} size={19} color='black' />
                <Text style={styles.atividade}> {atividade.segundo} </Text>
            </View>
            <View style={styles.icones}>
                <Icon name={icone.terceiro} size={19} color='black' />
                <Text style={styles.atividade}> {atividade.terceiro} </Text>
            </View>
        </View>
        <View >
            <Text style={styles.texto} numberOfLines={1}> {about} </Text>
        </View>
    </TouchableOpacity>
)

export default function Feed({ navigation }) {
    const renderItem = ({ item }) => (
        <Item 
            image={item.image} 
            data={item.data} 
            humor={item.humor}
            hora={item.hora}
            icone={item.icone}
            atividade={item.atividade}
            about={item.about} 
            
            onPress={() => navigation.navigate('Sobre', 
        {
            image: item.image,
            data: item.data,
            humor: item.humor,
            hora: item.hora,
            icone: item.icone,
            atividade: item.atividade,
            about: item.about,
        })}
        />
        
      );

    return (
        <SafeAreaView>
            <FlatList
                data={listaEmojis}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const cores = {
    BEM: '#E24B4B',
    MAL: '#4B75E2',
    TRISTE: '#4BE263',
} 
