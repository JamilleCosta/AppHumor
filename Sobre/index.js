import React from "react";
import { View, Image, Text} from 'react-native';

export default Tela04 = ({navigation, route}) => {
    const {image, data, humor, hora, icone, atividade, about} = route.params;
    return (
        <View> 
        <Text> {hora} </Text>    
        <Text> {data} </Text>
        <Image source={image} />
        <Text> {humor} </Text>
	    <Text> {icone} </Text>
	    <Text> {atividade} </Text> 
        <Text> {about} </Text>
        </View>
    ) 
}
