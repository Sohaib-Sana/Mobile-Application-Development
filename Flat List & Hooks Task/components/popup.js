import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet ,TextInput, Pressable , Modal} from 'react-native';


const Popup = (props) => {
    const [modalVisible, setModalVisible] = useState(props.visi);
    useEffect(()=>{setModalVisible(props.visi)},[props]);
    return (
            <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.title}> Edit Contact </Text>
                    <TextInput placeholder='Enter your Name' style={styles.TextInput}/>
                    <TextInput placeholder='Enter contact number.' style={styles.TextInput}/>
                    <Pressable 
                        onPress={() => setModalVisible(!modalVisible)} 
                        style={[styles.button, styles.buttonClose]}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}> EDIT </Text>
                    </Pressable>
                </View>
            </Modal>
    );
};


const styles = StyleSheet.create({
    modalView: {
        width: 275,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        alignSelf: 'center',
        borderRadius: 50
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    TextInput: {
        margin: 5,
        height: 40,
        borderColor: 'transparent',
        borderBottomWidth: 2,
        padding: 5,
        // borderWidth: 40,
        borderBottomColor: 'black'
    },
    button: {
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 120,
        margin: 10
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        },
});


export default Popup;


//  modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
  