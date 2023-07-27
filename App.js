import { FlatList, StatusBar, Text, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import React from 'react';

import StateProvider from './src/store/StateProvider';


export default function App() {



  return (
    <StateProvider>
      <StatusBar />
      <AppNavigation />

    </StateProvider>
  );
}


