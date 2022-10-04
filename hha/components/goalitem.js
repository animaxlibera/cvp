import {StyleSheet} from 'react-native';

function goalitem(props) {
    return (
    <View style={styles.goalitem}>
     <Text style={styles.goalText}>{itemdata.item}</Text>
    </View>
    );
};

export default goalitem;

const styles = StyleSheet.create({
    goalitem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#000000',
      },
      goalText: {
       color: '#FF0000',
      },
});