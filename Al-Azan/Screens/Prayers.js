//import liraries
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Prayers = ({ navigation , route}) => {
    const [ prayerTimings, setPrayerTimings ] = useState([]);
    const [ currentDate, setCurrentDate ] = useState(null);
    const [ day, setDay ] = useState();
    const [ month, setMonth ] = useState();
    const [ year, setYear] = useState();
    const { location } = route.params;
    const prayerTimingsApi = 'http://api.aladhan.com/v1/calendar';
    const currentDateApi = 'http://api.aladhan.com/v1/currentDate';
    let timingsToday = [];
    let listOfTimings = [];
    
    // TODO: Try krna hai ye zone Etc/GMT+5, using this zone for date Asia/Karachi


    useEffect(()=>{
        const getCurrentDate = async ()=>{
            let response = await axios.get(currentDateApi,{
                params:{
                    zone: "Asia/Karachi"
                }
            });
            setCurrentDate(response.data.data);
            console.log(currentDate);
            let date = currentDate.split('-');
            setDay(date[0]);
            setMonth(date[1]);
            setYear(date[2]);
        }
        getCurrentDate();
    },[]);

    useEffect(()=>{       
        const getPrayerTimings= async ()=>{
            const res = await axios.get(prayerTimingsApi,{
                params:{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    method: 2,
                    month: month,
                    year: year
                }
            });
            setPrayerTimings(res.data.data);
            timingsToday = prayerTimings.filter(item => item.date.gregorian.day == day);
            console.log(timingsToday[0].timings);
        }
        getPrayerTimings();
               
    },[]);
    
    return (
        <View style={styles.container}>
            <FlatList data={listOfTimings} renderItem={({item})=>{
                <View>
                    <Text>{item}</Text>
                </View>
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
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

export default Prayers;
