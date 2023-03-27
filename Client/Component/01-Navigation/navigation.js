import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../02-Home/home";
import Login from "../03-Login/login";
import Sesion from "../04-Sesion/sesion";
import Register from "../04-Sesion/registerMe/registerMe";
import HomeMain from "../HomeMain/homeMain";
import Topics from "../HomeMain/02-topics/topics";
import Theory from "../HomeMain/03-theory/theory";
import ChoiceTest from "../HomeMain/04-Choice/01-choiseTest/ChoiseTest";
import Choice from "../HomeMain/04-Choice/02-choise/choice";
import Importance from "../Importance/importance";
import Diary from "../HomeMain/Diary/diary";
import Introduction from "../HomeMain/Diary/Introduction/introduction";
import DiaryNavigation from "../HomeMain/Diary/DiaryNavigation/diaryNavigation";
import UserInfo from "../HomeMain/Diary/UserInfo/userInfo";
import { DefaultTheme } from "@react-navigation/native";
import { View } from "react-native";
import { Dimensions } from 'react-native';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFE1AE", // cambia el color de fondo de la barra de navegación
    primary: "black", // cambia el color de texto del título
    paddingTop: 20,
  },
};
const windowHeight = Dimensions.get('window').height;

/*En este componente se crea todas las rutas
  El componete Home muestra el logo de mind my emotion y despues de 2 segundo se trslada al componete login
  El componente login solo tiene dos titulos en los cuales elegis si son niño o adulto
*/
export default function Navigation() {
  const stack = createNativeStackNavigator();
  return (
    <View style={{ height: windowHeight , marginTop:28 }}>
      <NavigationContainer theme={MyTheme}>
        <stack.Navigator
          screenOptions={{
            headerTitleAlign: "center", // Centrar el título
            headerStyle: {
              backgroundColor: "#662483", // Color de fondo
              marginTop: 5,
            },
            headerTintColor: "#fff", // Color del texto del título
          }}
        >
          <stack.Screen
            name="home"
            component={Home}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="sesion"
            component={Sesion}
            options={{ headerShown: false }}
          />
          <stack.Screen name="register" component={Register} 
            options={{
              title: "Registrarse",
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "logo",
                fontSize: 30,
              },
            }}
          />
          <stack.Screen
            name="homeMain"
            component={HomeMain}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="topincs"
            component={Topics}
            options={{
              title: "Temas",
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "logo",
                fontSize: 30,
              },
            }}
          />
          <stack.Screen name="theory" component={Theory}        
           options={{
              title: "Teoria",
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "logo",
                fontSize: 30,
              },
            }}/>
          <stack.Screen name="choiseTest" component={ChoiceTest} 
            options={{
            title: "Test",
            headerTintColor: "white",
            headerTitleStyle: {
              fontFamily: "logo",
              fontSize: 30,
            }}}
          />
          <stack.Screen name="choice" component={Choice}
            options={{
              title: "Test",
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "logo",
                fontSize: 30,
              }}}
          />
          <stack.Screen name="importance" component={Importance} 
            options={{
              title: "Importancia",
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "logo",
                fontSize: 30,
              },
            }}
          />
          <stack.Screen name="diary" component={Diary} 
            options={{
              title: "Diario",
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "logo",
                fontSize: 30,
              },
            }}
          />
          <stack.Screen name="introduction" component={Introduction}
            options={{
              title: "¿Quien eres?",
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "logo",
                fontSize: 30,
              },
            }}
          />
          <stack.Screen name="userInfo" component={UserInfo} />
          <stack.Screen name="diaryNavigation" component={DiaryNavigation} />
        </stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
