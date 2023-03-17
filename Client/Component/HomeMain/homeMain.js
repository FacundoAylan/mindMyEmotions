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
          /* tabBarBadge: 5, */ //Esta propiedad sirve para agregar un contador de notificaciones en el futuro
        }}
      />
      <Tab.Screen
        name="​"
        component={About}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
            style={styles.logo}
            source={{
              uri: 'https://res.cloudinary.com/ds7h3huhx/image/upload/c_scale,w_100/v1679012926/MME%20logos/ME_3_offzo2.png',
            }}
          />
          ),
        }}
      />
      <Tab.Screen
        name="Mi perfil"
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
    marginTop: 12,
    width: 55,
    height: 55,
  },
})