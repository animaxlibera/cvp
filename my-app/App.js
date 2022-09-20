import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./source/sourses/home";
import deteilscreen from "./source/sourses/detail";
import aboutscreen from "./source/sourses/about";
import settingscreen from "./source/sourses/settings";
import profilescreen from "./source/sourses/profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profile">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detail" component={deteilscreen} />
        <Stack.Screen name="setting" component={settingscreen} />
        <Stack.Screen name="about" component={aboutscreen} />
        <Stack.Screen name="profile" component={profilescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
