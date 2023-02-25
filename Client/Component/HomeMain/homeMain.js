import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Modules from "./Modules/modules";
import Setting from "./Setting/setting";

export default function HomeMain ({ navigation }) {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name='Inicio' component={Modules} options={{headerShown: false}}/>
      <Tab.Screen name='Configuración' component={Setting} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}
