import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CenterHome from './app/components/CenterHome';
import House from './app/components/House';
import Path from './app/components/path';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.wholeRow,{flex: 2}]}>
          <House style={{backgroundColor:'#ff000099'}}/>
          <Path style={{backgroundColor: 'blue', flexDirection:'column'}} clr = 'blue'/>
          <House style={{backgroundColor:'#0000ff99'}}/>
        </View>
        <View style={[styles.wholeRow,{flex: 1}]}>
          <Path style={{backgroundColor: 'red', flexDirection:'row'}} clr = 'red'/>
          <CenterHome/>
          <Path style={{backgroundColor: 'yellow', flexDirection:'row-reverse'}} clr = 'yellow'/>
        </View>
        <View style={[styles.wholeRow,{flex: 2}]}>
          <House style={{backgroundColor: '#00800099'}}/>
          <Path style={{backgroundColor: 'green', flexDirection:'column-reverse'}} clr = 'green'/>
          <House style={{backgroundColor: '#ffff0099'}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
    
  },
  container: {
    width: 525,
    height: 525,
    backgroundColor: 'darkgrey'
  },
  wholeRow: {
    flexDirection: 'row',
  }
});
