import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home/home";
import Login from "../Login/login";
import Sesion from "../Sesion/sesion";
import Register from "../registerMe/registerMe";
import HomeMain from "../HomeMain/homeMain";
import Choice from "../HomeMain/Choice/choice";

//En este componente se crea todas las rutas
export default function Navigation () {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        <stack.Screen name="login" component={Login} />
        <stack.Screen name="sesion" component={Sesion} />
        <stack.Screen name="register" component={Register} />
        <stack.Screen name="homeMain" component={HomeMain} />
        <stack.Screen name="choice" component={Choice} />
      </stack.Navigator>
    </NavigationContainer>
  );
}


