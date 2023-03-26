import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Modules from "./01-Modules/modules";
import Setting from "./Setting/setting";
import About from "./about/about";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons'; 
import { Image, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeMain ({ navigation }) {
  const Tab = createBottomTabNavigator();

  //All these new asyncstorage keys are used to store the diary values and they are created here the first time after an async storage clean() function is executed, so these keys are born after a new user enters the app.
  const createAllTextInputsOnAsyncStorage = async () => {
    let diaryKeysExist = await AsyncStorage.getItem( 'DIARY_KEYS_CREATED' );
    if ( diaryKeysExist === 'true' ) {
      console.log( 'Diary keys are already created.' );
      return
    }
    try {
      console.log( 'CREATING DIARY KEYS ON ASYNC STORAGE...' );
      await AsyncStorage.setItem( 'MY_NAME_IS', '' );
      await AsyncStorage.setItem( 'MY_AGE_IS', '' );
      await AsyncStorage.setItem( 'MY_HAPPINESS_IS', '' );
      await AsyncStorage.setItem( 'FIRST_DATE', '' );
      await AsyncStorage.setItem( 'FIRST_INPUT', '' );
      await AsyncStorage.setItem( 'SECOND_DATE', '' );
      await AsyncStorage.setItem( 'SECOND_INPUT', '' );
      await AsyncStorage.setItem( 'THIRD_DATE', '' );
      await AsyncStorage.setItem( 'THIRD_INPUT', '' );
      await AsyncStorage.setItem( 'FOURTH_DATE', '' );
      await AsyncStorage.setItem( 'FOURTH_INPUT', '' );
      await AsyncStorage.setItem( 'FIFTH_DATE', '' );
      await AsyncStorage.setItem( 'FIFTH_INPUT', '' );
      await AsyncStorage.setItem( 'MONTH_INPUT', '' );
      await AsyncStorage.setItem( 'DIARY_KEYS_CREATED', 'true' );
    } catch ( error ) {
      console.log( error );
    }
  }
  createAllTextInputsOnAsyncStorage()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#662483',
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