import { View } from "react-native-web";

export function OddRow(){
    return(
        <View style={styles.row}>
            <View style={styles.blackBox}></View>
            <View style={styles.whiteBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.whiteBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.whiteBox}></View>
            <View style={styles.blackBox}></View>
            <View style={styles.whiteBox}></View>
            <View style={styles.blackBox}></View>
        </View>
    );
}

const styles={
    row: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
      },
      blackBox:{
        backgroundColor:"black",
        width:"50px",
        height:"50px"
      },
      whiteBox:{
        backgroundColor:"#f5f5f5",
        width:"50px",
        height:"50px"
      }
}