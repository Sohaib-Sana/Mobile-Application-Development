import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './app/Components/Avatar';
import TextFields from './app/Components/TextFields';
import CustomButton from './app/Components/CustomButtons';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar/>
      <TextFields/> 
      <CustomButton/>
      <View style={{flexDirection: 'row', flex: 1, justifyContent:'center'}}>
        <Text style={{color:'white'}}>Only Specific admin can login, </Text>
        <Text style={{color:'blue'}}> show more</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    backgroundColor: '#0e4660'
  },
});
