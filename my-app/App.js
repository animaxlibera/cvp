import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from "./source/screens/Home";
import Detailscreen from "./source/screens/Details";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
