import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Modules from "./Modules/modules";
import Setting from "./Setting/setting";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function HomeMain ({ navigation }) {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'purple'
    }}>
      <Tab.Screen 
        name='Inicio' 
        component={Modules} 
        options={{
          headerShown: false,
          tabBarIcon:({color,size}) => (
            <MaterialCommunityIcons name='home' color={color} size={size}/>
          ),
          tabBarBadge: 5,
        }}
      />
      <Tab.Screen 
        name='Configuración' 
        component={Setting} 
        options={{
          headerShown: false,
          tabBarIcon:({color,size}) => (
            <MaterialCommunityIcons name='brightness-5' color={color} size={size}/>
          ),
          
        }}
      />
    </Tab.Navigator>
  )
}
