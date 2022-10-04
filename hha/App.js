import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, } from 'react-native';
import Goalitem from './components/Goalitem';

export default function App() {
  const [enteredGoaltext, setEnteredGoalText] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);
  function goalinputHandler(enteredText){
    setEnteredGoalText(enteredText);
  }

  function addGoalhandler() {
    setcourseGoals(currenCourseGoals => [...courseGoals, enteredGoaltext,]);
  };

  return (
    <View style={styles.appcontainer}>
      <View style={styles.inputcontainer}>
         <TextInput style={styles.TextInput} placeholder='your goals'
          onChangeText={goalinputHandler}/>
         <Button title=" add goal" onPress={addGoalhandler}/>
      </View>
      <View  style={styles.goalscontainer}>
      <FlatList data={courseGoals} renderItem={(itemdata) => {
        
        return <Goalitem text={itemdata.item.text}/>;
      }}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appcontainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
 },
 inputcontainer: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignitems: 'center',
   paddingBottom: 24,
   borderBottomWidth: 1,
   borderBottomColor: '#cccccc'

 },
 TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '71%', 
    marginRight: 8,
    padding: 8 
 },
 goalscontainer:{
  flex: 5
 }
});
