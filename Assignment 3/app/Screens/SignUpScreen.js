
import { Pressable,StyleSheet, Text, View } from 'react-native';
import Avatar from '../Components/Avatar';
import CustomButton from '../Components/CustomButtons';
import TextFields from '../Components/TextFields';
import {storeData, getData} from '../Components/localStorage'

export default function LoginScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style = {styles.header}><Text style = {styles.title}>Sign Up Page</Text></View>
      <View style = {styles.container}><Avatar/></View>
      <View style = {styles.container}><TextFields/></View>
      <View style = {styles.container}><CustomButton Button="Sign Up" 
      buttonPressed={()=>{
        storeData({key:'status',value:'loggedIn'});
        navigation.navigate('Profile');
      }}
      /></View>
      <View style={{flexDirection: 'row', flex: 1, justifyContent:'center'}}>     
        <Text style={{color:'white'}}>Already have an account? </Text>
        <Pressable><Text style={{color:'dodgerblue'}} onPress={()=>{navigation.navigate('Login')}}> Login</Text></Pressable>
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
  header:{
    flex: 0.5,
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0e4660'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'start', 
},
});

