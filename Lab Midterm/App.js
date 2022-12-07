import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet} from 'react-native';
import ContactBook from './components/ContactBook';

// let visibility=false;



export default function App(){
  return (
    <ContactBook/>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: StatusBar.currentHeight || 0,

  },

});