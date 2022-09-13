import * as React from "react";
import { View, Text, Button } from "react-native";
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="a" onPress={() => navigation.navigate("detail")}></Button>
      <Text>setting</Text>
      <Button title="b" onPress={() => navigation.navigate("setting")}></Button>
      <Text>about</Text>
      <Button title="c" onPress={() => navigation.navigate("about")}></Button>
    </View>
  );
}
