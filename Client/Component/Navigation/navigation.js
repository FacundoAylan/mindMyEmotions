import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home/home";
import Login from "../Login/login";
import Sesion from "../Sesion/sesion";
import Register from "../registerMe/registerMe";
import HomeMain from "../HomeMain/homeMain";
import Topics from '../HomeMain/02-topics/topics';
import Theory from '../HomeMain/03-theory/theory';
import Choice from "../HomeMain/04-Choice/choice";
import ChoiceTest from "../HomeMain/04-Choice/ChoiseTest";
import Importance from "../Importance/importance";
import Diary from "../HomeMain/Diary/diary";
import Introduction from "../HomeMain/Diary/Introduction/introduction";
import Data from "../HomeMain/Diary/Data/data";

//En este componente se crea todas las rutas
export default function Navigation () {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="home" component={Home} options={{headerShown: false}}/>
        <stack.Screen name="login" component={Login} options={{headerShown: false}} />
        <stack.Screen name="sesion" component={Sesion} options={{headerShown: false}}/>
        <stack.Screen name="register" component={Register} />
        <stack.Screen name="homeMain" component={HomeMain} />
        <stack.Screen name="choice" component={Choice} />
        <stack.Screen name="importance" component={Importance} />
        <stack.Screen name="theory" component={Theory} />
        <stack.Screen name="topincs" component={Topics} />
        <stack.Screen name="choiseTest" component={ChoiceTest} />
        <stack.Screen name="diary" component={Diary} />
        <stack.Screen name="introduction" component={Introduction} />
        <stack.Screen name="data" component={Data} />
      </stack.Navigator>
    </NavigationContainer>
  );
}


