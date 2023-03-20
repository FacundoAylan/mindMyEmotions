import React, { useState, useEffect } from 'react';
import Navigation from './Component/Navigation/navigation';
import { Provider } from 'react-redux'
import { store } from './redux/store/index'
import 'expo-dev-client'
/* import { View, Text, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
 */

export default function App() {
  //react native google auth with firebase configuration tutorial here = https://www.youtube.com/watch?v=d_Vf41Sb0v0

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

