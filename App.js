import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./src/routes";
import Login from "./tela_login/login";
import Sobre from "./Sobre";
import EditarPerfil from "./tela_editarPerfil/editarPerfil";
import Fotos from "./tela_fotos/fotos";
import Confirmação from "./tela_perfil/confirmaçãoSaída/confirmação";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator 
        screenOptions={{
            headerShown: false,
        }}
        >
        <Stack.Screen
          name="Login"
          component={Login}
        /> 
        <Stack.Screen 
          name="Homer"
          component={Routes} 
        />
        <Stack.Screen 
          name="Sobre"
          component={Sobre}
        />
        <Stack.Screen 
          name="EditarPerfil"
          component={EditarPerfil}
        />
        <Stack.Screen 
          name="Fotos"
          component={Fotos}
        />
        <Stack.Screen 
          name="Confirmação"
          component={Confirmação}
        />
      </Stack.Navigator>
  );
};

export default function App() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
        
  )
}

