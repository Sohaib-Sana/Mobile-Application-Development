import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/Screens/LoginScreen';
import SignUpScreen from './app/Screens/SignUpScreen';
import ProfileScreen from './app/Screens/ProfileScreen';
import { getData } from './app/Components/localStorage';
import { useState } from 'react';

export default function App() {
  const [initialRoute,setInitialRoute] = useState(' ');
  console.log(initialRoute);
  getData({key:'status'}).then((value)=>{
    if (value==='loggedIn'){
      setInitialRoute('Profile');
      console.log(initialRoute);
    }else if(value === 'loggedOut'){
      setInitialRoute('Login');
    }else{
      setInitialRoute('SignIn');
    }
  });
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={initialRoute}>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "SignUp" component={SignUpScreen}/>
        <Stack.Screen name = "Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
