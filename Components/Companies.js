import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import { StyleSheet, View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Modal, Dimensions, StatusBar, Alert } from 'react-native'
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useDispatch } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux'


export default function Companies({ navigation, route }) {

    const datar = useSelector(state => state.user)
    console.log(datar.UserEmail)

    const [data, setData] = useState([])
    useEffect(() => {
        firestore().collection('Company').orderBy('TimeStamp', 'desc').onSnapshot(function (querySnapshot) {
            setData(
                querySnapshot.docs.map((doc) => ({
                    Id: doc.id,
                    cn: doc.data().CompanyName,
                    es: doc.data().Established,
                    hr: doc.data().HR,
                    type: doc.data().Type,
                    pn: doc.data().PhoneNum,
                    CompanyEmail: doc.data().CompanyEmail,
                    dateTime: doc.data().DateTime,
                }))

            )
        })
    }, [])


    const del = (CompanyEmail) => {
        console.log(CompanyEmail)
        firestore().collection('Company').doc(CompanyEmail).delete()
    }

    const edit = (CompanyEmail) => {
        // firestore().collection('Student').doc(del).delete()
    }

    return (<View>

        <StatusBar barStyle="light-content" backgroundColor="#3b7ae4" />

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: "#3b7ae4", elevation: 5, width: '100%', }}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}
                style={{ marginLeft: -20, marginVertical: 14, width: 30, }}>
                <Text style={{
                    color: 'white', fontWeight: 'bold', fontSize: 27,
                    textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
                }}><Ionicons name="md-chevron-back" size={30} color="#ffff" /></Text>
            </TouchableOpacity>
            <Text style={{
                color: 'white', fontWeight: 'bold', marginVertical: 15, fontSize: 20,
                textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
            }}>Company's List</Text>
            <Text style={{
                color: 'white', fontWeight: 'bold', marginVertical: 15, fontSize: 20,
                textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
            }}></Text>
        </View>


        <ScrollView style={styles.end}>
            {data.map((d, i) => {
                return <>
                    <TouchableOpacity activeOpacity={0.8} key={i} onPress={() => {
                        // navigation.navigate('Main', {
                        //     key: d.Id,
                        //     cn: d.cn,
                        // })
                    }} style={styles.data} key={i}>


                        <View style={{
                            // justifyContent: 'space-between',
                            // flexDirection: 'row',
                        }}>


                            {(datar.UserEmail) == 'admin@admin.com' ? <View style={{ position: 'absolute', right: -40 }}>

                                <TouchableOpacity activeOpacity={0.4} onPress={() => { del(d.CompanyEmail) }}
                                    style={{ marginVertical: 14, width: 30, borderRadius: 50 }}>
                                    <Text style={{
                                        color: 'black', fontWeight: 'bold', fontSize: 27,
                                        textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
                                    }}><MaterialCommunityIcons name="delete" size={30} color="black" /></Text>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={0.4} onPress={() =>navigation.navigate('EC',{
                                    // key: d.Id,
                                        email: d.CompanyEmail,
                                    })}
                                    style={{ marginVertical: 14, width: 30, borderRadius: 50 }}>
                                    <Text style={{
                                        color: 'black', fontWeight: 'bold', fontSize: 27,
                                        textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
                                    }}><FontAwesome name="edit" size={30} color="black" /></Text>
                                </TouchableOpacity>
                            </View>
                                : <></>}

                            <View>
                                <Image source={require('./Images/co.png')}
                                    style={{ width: 220, height: 100, borderRadius: 50, marginVertical: 5 }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 1 }}><FontAwesome name="building" size={12} color="black" />  Company:     {d.cn}</Text>
                                <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><Entypo name="calendar" size={11.3} color="black" />  Established: {d.es}</Text>
                                <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><Fontisto name="person" size={11.3} color="black" />  HR Name:       {d.hr}</Text>
                                <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><MaterialCommunityIcons name="email" size={11.3} color="black" />  Email:             {d.CompanyEmail}</Text>
                                <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><FontAwesome name="phone" size={12} color="black" />  Phone:           {d.pn}</Text>
                                <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><Entypo name="back-in-time" size={11.3} color="black" />  Reg At:          {d.dateTime}</Text>

                            </View>
                        </View>

                        {/* <TouchableOpacity style={{ backgroundColor: "#3b7ae4", borderRadius: 15, marginVertical: 15 }} onPress={() => { }}>
                            <Text style={{
                                fontSize: 17, fontWeight: 'bold', color: '#ffff', paddingHorizontal: 20, paddingVertical: 5,
                            }}>  Apply  </Text>
                        </TouchableOpacity> */}

                    </TouchableOpacity>
                </>
            })}
        </ScrollView>



    </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    data: {
        alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        margin: 10,
        backgroundColor: "#ffff",
        elevation: 5,
        borderRadius: 15,
        padding: 10,
        // paddingLeft:18
    },
    end: {
        marginBottom: 60,
    }




});