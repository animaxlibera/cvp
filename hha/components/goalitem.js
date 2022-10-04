import {StyleSheet, View, Text} from 'react-native';

function goalitem(props) {
    return (
    <View style={styles.goalitem}>
     <Text style={styles.goalText}>{props.text}</Text>
    </View>
    );
}

export default goalitem;

const styles = StyleSheet.create({
    goalitem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#000000',
      },
      goalText: {
       color: '#ff0000',
      },
});