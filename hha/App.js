import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
         <TextInput style={styles.TextInput} placeholder='your goals' />
         <Button title=" add goal"/>
      </View>
      <View>
        <Text>list of goals. . .</Text>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appcontainer: {
    padding: 50,
 },
 inputcontainer: {
   flexDirection: 'row',
   justifyContent: 'space-between '
 },
 TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '71%' 
  
 }
});
