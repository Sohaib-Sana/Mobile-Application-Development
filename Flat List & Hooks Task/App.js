import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , FlatList, SafeAreaView, Pressable} from 'react-native';
import Popup from './components/popup';

let visibility=false;

const DATA=[
  {name:"Ali",phone:"090078601",pic:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
{name:"Arshad",phone:"090078601",pic:"https://www.w3schools.com/howto/img_avatar2.png"},
{name:"Osama",phone:"03111531305",pic:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}]

const Item = ({ title , tasveer}) => (
  <Pressable onPressIn={()=>{console.log("Pressed in.")}} onLongPress={()=>{visibility=true}}>
    <View style={styles.item}>
      <Image source={{uri:tasveer}} style = {styles.avatar}></Image>
      <Text style={styles.title}>{title}</Text>
    </View>
  </Pressable>
);

export default function App(){
  const renderItem = ({ item }) => (
    <Item title={item.name} tasveer={item.pic} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
      <Popup visi={visibility}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: StatusBar.currentHeight || 0,

  },
  avatar:{
    width:60,
    height:60,
    marginRight:8,
    marginLeft:2, 
    borderRadius: 30,
    backgroundColor:'red'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  title: {
    fontSize: 32,
  },
});