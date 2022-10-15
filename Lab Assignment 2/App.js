import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {OddRow} from "./Components/OddRow";
import { EvenRow } from './Components/EvenRow';
export default function App() {
  return (
    <View style={styles.wrapper}>
      <OddRow></OddRow>
      <EvenRow></EvenRow>
      <OddRow></OddRow>
      <EvenRow></EvenRow>
      <OddRow></OddRow>
      <EvenRow></EvenRow>
      <OddRow></OddRow>
      <EvenRow></EvenRow>
      <OddRow></OddRow>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'brown',
    justifyContent: 'center',

  },
});
