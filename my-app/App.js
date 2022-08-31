import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from"./source/sourses/home";
import deteilscreen from"./source/sourses/detail";
// import setscreen from"./sourse/sourses/set";
// import datascreen from"./sourse/sourses/data";
import aboutscreen from"./source/sourses/about";
import settingscreen from"./source/sourses/settings";

const Stack = createNativeStackNavigator();

export default function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='detail' component={deteilscreen}/>
        {/* <Stack.Screen name='data' component={datascreen}/> */}
        <Stack.Screen name='setting' component={settingscreen}/>
        <Stack.Screen name='about' component={aboutscreen}/>
        {/* <Stack.Screen name='set' component={setscreen}/> */}
    </Stack.Navigator>
    </NavigationContainer>
  )
}
