import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home/home";
import Login from "../Login/login";

//Poder navegar entre componentes
function MyStack() {
  const HomeStackNavigator = createNativeStackNavigator();
  return (
    <HomeStackNavigator.Navigator initialRouteName="home">
      <HomeStackNavigator.Screen name="home" component={Home} options={{headerShown: false}}/>
      <HomeStackNavigator.Screen name="login" component={Login} />
    </HomeStackNavigator.Navigator>
  );
}

// Mostrar  menu inferior
function MyTab () {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={MyStack} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
};

export default function Navigation () {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}