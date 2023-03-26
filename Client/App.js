import React from 'react';
import Navigation from './Component/01-Navigation/navigation';
import { Provider } from 'react-redux'
import { store } from './redux/store/index'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

