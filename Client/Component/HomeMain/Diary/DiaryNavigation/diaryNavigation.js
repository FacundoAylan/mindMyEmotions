import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import UserInfo from "../UserInfo/userInfo";
import DiaryApp from "../DiaryApp/diaryApp";
import MyMonth from "../MyMonth/myMonth";


export default function DiaryNavigation( { navigation } ) {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "purple",
            }}
        >
            <Tab.Screen
                name="Soy"
                component={UserInfo}
                options={{
                    headerShown: false,
                    tabBarIcon: ( { color, size } ) => (
                        <AntDesign name="user" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Diario​"
                component={DiaryApp}
                options={{
                    headerShown: false,
                    tabBarIcon: ( { color, size } ) => (
                        <Feather name="book-open" size={20} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Mi mes"
                component={MyMonth}
                options={{
                    headerShown: false,
                    tabBarIcon: ( { color, size } ) => (
                        <Feather name="square" size={20} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderLeftWidth: 5,
        borderLeftColor: '#f29100',
        borderRightWidth: 5,
        borderRightColor: '#662483',
        height: "100%",
    },
    ContainerText: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'pink',
        marginLeft: '5%',
        marginTop: '10%',
        width: '90%',
        height: '65%',
        borderRadius: 5,
        padding: '2%'
    },
    image: {
        width: '100%',
        height: '30%',
        borderRadius: 12,
        resizeMode: 'stretch',
        marginBottom: 10
    },
    text: {
        textAlign: 'center',
        color: 'purple',
        fontSize: 20
    },
    containerButton: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#E0ECFF",
        height: 50,
        marginTop: 20,
        width: '80%',
        borderRadius: 8
    },
    textButton: {
        flex: 0,
        justifyContent: "center",
        textAlign: "center",
        color: "purple",
    },
    logo: {
        marginTop: 12,
        width: 55,
        height: 55,
    },
}
)
