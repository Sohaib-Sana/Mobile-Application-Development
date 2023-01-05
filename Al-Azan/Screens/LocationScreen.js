import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';


export default function LocationScreen({ navigation }) {
const [ location , setLocation ] = useState();

  useEffect(()=>{
    const getLocation = async() => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status != 'granted'){
        console.log("Please grant location permission.");
        return;
      }
      const geoCode = await Location.getCurrentPositionAsync({});
      setLocation(geoCode);
    };
    getLocation();
  },[]);
  

  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Prayers',{
          location: location,
        });
      }}>
        <View style = {styles.button}>
          <Text>Prayer Timings</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}}>
        <View style = {styles.button}>
          <Text>Update Location</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems:'center',
    justifyContent: 'center',
    width: 120,
    height: 40,
    backgroundColor: 'limegreen',
    margin: 1
  }
});

