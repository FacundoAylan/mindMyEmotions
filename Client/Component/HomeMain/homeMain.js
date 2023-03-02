import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Modules from "./Modules/modules";
import Setting from "./Setting/setting";
import About from "./about/about";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons'; 
import { Image, StyleSheet } from "react-native";

export default function HomeMain ({ navigation }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "purple",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Modules}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 5,
        }}
      />
      <Tab.Screen
        name="Sobre mi"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
            style={styles.logo}
            source={{
              uri: 'https://i.ibb.co/s2jKMtg/mind-My-Emotions.png',
            }}
          />
          ),
        }}
      />
      <Tab.Screen
        name="Usuario"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create( {
  logo: {
    width: 30,
    height: 30,
  },
})