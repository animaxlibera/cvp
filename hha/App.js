import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

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
      <View style={styles.goalscontainer}>
            {courseGoals.map((goal) => <Text style={styles.goalitem} key={goal}>{goal}</Text> )}
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
 },
 goalitem: {
   margin: 8,
   padding: 8,
   borderRadius: 6,
   backgroundColor: '#fa0000',
   color: 'white'
 }
});
