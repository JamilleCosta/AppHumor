import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homer from "../tela_homer/homer";
import Feed from "../tela_feed/feed.js";
import Perfil from '../tela_perfil/perfil';
import Icon from 'react-native-vector-icons/Entypo';
import Icon01 from 'react-native-vector-icons/Ionicons';
import Icon02 from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return ( 
        <Tab.Navigator 
           initialRouteName="Feed"
           screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,

              tabBarStyle: {
                height: 90,
                borderTopColor: '#C4C4C4',
                borderTopWidth: 2,
                backgroundColor: '#FFFF',
              }
           }}
        >
             <Tab.Screen 
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel:'',
                    tabBarIcon: () => (
                        <Icon 
                           style={styles.icon}
                           name= "home"
                           size={23}
                           color={'#304FFE'}
                        />
                    )
                }}
             /> 
             
	         <Tab.Screen 
                name="Início" 
                component={homer}
                options={{
                    tabBarLabel:'',
                    tabBarIcon: () => (
                        <Icon02 
                           name="plus-circle"
                           size={65}
                           color={"#304FFE"}
                        /> 
                    ),
                    tabBarStyle: { display: 'none' }
                }}
            />
             <Tab.Screen 
                name="Perfil"
                component={Perfil} 
                options={{
                    tabBarLabel:'',
                    tabBarIcon: () => (
                        <Icon01 
                           style={styles.icon1}
                           name= "list-outline"
                           size={30}
                           color={'#304FFE'}
                        />
                    )  
                }} 
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    icon: {
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        borderRadius: 10,
        height: 45,
        width: 40,
        padding: 9,      
    },
    icon1: {
        backgroundColor: 'rgba(48, 79, 254, 0.1)',
        borderRadius: 10,
        height: 45,
        width: 40,
        padding: 6,
    }
})