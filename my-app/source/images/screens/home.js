import * as React from "react"; 7.5k (gzipped: 3)
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Detail"
          onPress={() => navigation.navigate('Details')}
          ></Button>
          <text> HomeScreen</text>
          <Button title="HOME!"></Button>
        />
      </View>
    );
  }
