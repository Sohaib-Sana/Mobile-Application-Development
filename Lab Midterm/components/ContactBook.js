import { View, StyleSheet, Text, FlatList, Pressable, TextInput, Button, Image, } from "react-native";
import  React,{ useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-web";

  function ContactBook() {
    const [Data, setData] = useState([
      {id:1,name:"Ali",phone:"090078601",pic:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
      {id:2,name:"Arshad",phone:"090078601",pic:"https://www.w3schools.com/howto/img_avatar2.png"},
      {id:3,name:"Osama",phone:"03111531305",pic:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"},
      {id:4,name:"Ali",phone:"090078601",pic:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"},
      {id:5,name:"Arshad",phone:"090078601",pic:"https://www.w3schools.com/howto/img_avatar2.png"},
      {id:6,name:"Osama",phone:"03111531305",pic:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
    ]);
    const [selectedContact, updateSelectedContact] = useState(Data[0]);
    const [searchedContact, updateSearchContact] = useState(null);
    const [disableOrNot, updaateDisableOrNot] = useState(true);
    const [saveEnable, setSaveEnable] = useState(false);

    function getItem(item) {
      updateSelectedContact(item);
      // console.log(selectedContact);
    }

    const renderer=({item})=>{
      return (
        <View style={styles.item}>
          <View style={styles.itemComp}>
            <Image style={styles.avatar} source={{uri: item.pic}}/>
            <Text style = {{fontSize: 20, margin: 10}}> {item.name}</Text>
          </View>
          <View style={styles.itemComp}>
            <Pressable onPress={()=>{
              setData(Data.filter(obj => obj.id !== item.id));
            }}>
              <AntDesign name="delete" size={32} color="black" style={{margin: 10}}/>
            </Pressable>
            <Pressable onPress={()=>{getItem(item)}}>
              <AntDesign name="edit" size={32} color="black" style={{margin: 10}}/>
            </Pressable>
          </View>
        </View>
      );
    }

    function updateContactFunc(contact) {
      Data[contact.id - 1] = contact;
      setData([...Data]);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CONTACTS</Text>
        <View style={styles.ContactList}>
          <FlatList data={Data} renderItem={renderer}/>
        </View>
        <View style={styles.EditForm}>
          <View style={[{justifyContent:'space-between'},styles.itemComp]}>
            <View style={[styles.itemComp,{borderWidth:1, margin: 5, paddingLeft: 10, borderRadius:50}]}>
              <TextInput 
                placeholder="Search" 
                width={120}
                onChangeText={(value)=>{
                  updateSearchContact(value);
                  if(value!==""){
                    updaateDisableOrNot(false);
                  }
                }}
              />
              <Pressable disabled={disableOrNot} onPress={()=>{
                updateSelectedContact(Data.filter(obj=>obj.name == searchedContact).at(0));
              }}>
                <AntDesign name="search1" size={32} color="black" style={{margin:10}}/>
              </Pressable>
            </View>
            <Pressable onPress={()=>{
                setSaveEnable(true);
              updateSelectedContact({...selectedContact, name:"", phone:""})
            }}>
              <View style={styles.button}>
                <Text> Add Item</Text>
              </View>
            </Pressable>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Name" 
            value={selectedContact.name}
            onChangeText={(text) =>
              {
                if(text!==""){
                  setSaveEnable(false);
                }else{
                  setSaveEnable(true);
                }
                updateSelectedContact({ ...selectedContact, name: text });
              }
            } />
          <TextInput 
            style={styles.textInput}
            placeholder="Phone No" 
            value={selectedContact.phone.toString()}
            keyboardType="phone-pad"
            onChangeText={(text) =>{
              if(text!==""){
                setSaveEnable(false);
              }else{
                setSaveEnable(true);
              }
              updateSelectedContact({ ...selectedContact, phone: text });
            }
            }
          />
          <Pressable
            style={{alignSelf:'center'}}
            disabled={saveEnable}
            onPress={()=>{
              // if (Data.name !== selectedContact.name && Data.phone !== selectedContact.phone ){
              //   // Data.push({
              //   //   id:Data.length+1,
              //   //   name: selectedContact.name,
              //   //   pic: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"

              //   // })
              // }else{
              //   if(selectedContact.name == "" && selectedContact.phone==""){

              //   }else{
                    // updateContactFunc(selectedContact)
              //   }
              // }
              updateContactFunc(selectedContact)
            }}>
            <View style={styles.button}>
              <Text>    Save</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    ContactList: {
      flex: 2,
      backgroundColor: "azure",
    },
    EditForm: {   
      borderWidth:1,   
      flex: 1,
      backgroundColor: "lightgrey",
      padding: 10
    },
    container: {
      paddingTop:20,
      flex: 1,
    },
    avatar:{
      width:60,
      height:60,
      marginRight: 10,
      marginLeft:2, 
      borderRadius: 30,
      backgroundColor:'red'
    },
    itemComp: {
      flexDirection: 'row',
    },
    item: {
      backgroundColor: 'gainsboro',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    button: {
      padding: 8,
      width: 80, 
      height:10, 
      margin:10, 
      backgroundColor:'steelblue', 
      height:40,
      borderRadius: 20
    },
    textInput:{
      borderWidth:1, 
      flex: 1, 
      margin:10, 
      paddingStart: 20
    },
  });
  export default ContactBook;
