import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet , TextInput, Button, Modal, Pressable, FlatList  } from 'react-native';

const history= ["First item."];

const Discount = () => {

    const [ammount,updateAmmount] = useState(0);
    const [discountPercent,updateDiscountPercent] = useState(0);
    const [discountedPrice, updateDiscountedPrice] = useState(0);
    const [finalPrice, updateFinalPrice] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    

    useEffect(()=>{
        console.log("Called");
        updateDiscountedPrice(ammount*(discountPercent/100));
        updateFinalPrice(ammount-(ammount*(discountPercent/100)));
        console.log("Called again");
    },[ammount, discountPercent]);

    const updateHistory = (pAmmount, pDiscountPercent, pFinalPrice)=>{
        history.push(
            `${pAmmount} - ${pDiscountPercent}% = ${pFinalPrice}`
        );
    };
    return (
        <View style={styles.wrapper}>
            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FlatList
                            data={history}
                            renderItem={({item}) => <Text>{item}</Text>}/>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TextInput
                style={styles.input}
                onChangeText={(value)=>updateAmmount(value)}
                value={ammount}
                placeholder={"Original Price"}
                keyboardType="number-pad"
            />
            <TextInput
                style={styles.input}
                onChangeText={(value)=>updateDiscountPercent(value)}
                value={discountPercent}
                placeholder={"Discount (0%-100%)"}
                keyboardType="number-pad"

            />
            <Text>You Saved : {discountedPrice}</Text>
            <Text>Final Price: {finalPrice}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={updateHistory(ammount, discountPercent, finalPrice)}
                    title=" SAVE "
                    color="#841584"
                    accessibilityLabel="Save this Calculations"
                />
                <Button
                    onPress={()=>{setModalVisible(true); console.log(history)}}
                    title=" HISTORY "
                    color="#841584"
                    accessibilityLabel="Save this Calculations"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: 140,
        justifyContent: 'space-around'
    },
    wrapper: {
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

export default Discount;
