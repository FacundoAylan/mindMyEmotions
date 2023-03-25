import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../02-Home/home";
import Login from "../03-Login/login";
import Sesion from "../04-Sesion/sesion";
import Register from "../04-Sesion/registerMe/registerMe";
import HomeMain from "../HomeMain/homeMain";
import Topics from '../HomeMain/02-topics/topics';
import Theory from '../HomeMain/03-theory/theory';
import ChoiceTest from "../HomeMain/04-Choice/01-choiseTest/ChoiseTest";
import Choice from "../HomeMain/04-Choice/02-choise/choice";
import Importance from "../Importance/importance";
import Diary from "../HomeMain/Diary/diary";
import Introduction from "../HomeMain/Diary/Introduction/introduction";
import Data from "../HomeMain/Diary/Data/data";

/*En este componente se crea todas las rutas
  El componete Home muestra el logo de mind my emotion y despues de 2 segundo se trslada al componete login
  El componente login solo tiene dos titulos en los cuales elegis si son niño o adulto
*/
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
        <stack.Screen name="topincs" component={Topics} />
        <stack.Screen name="theory" component={Theory} />
        <stack.Screen name="choiseTest" component={ChoiceTest} />
        <stack.Screen name="choice" component={Choice} />
        <stack.Screen name="importance" component={Importance} />
        <stack.Screen name="diary" component={Diary} />
        <stack.Screen name="introduction" component={Introduction} />
        <stack.Screen name="data" component={Data} />
      </stack.Navigator>
    </NavigationContainer>
  );
}


