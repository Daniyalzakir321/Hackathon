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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';


export default function PostNewVacancies({ navigation, route }) {

    const datar = useSelector(state => state.user)
    console.log(datar.UserEmail)

    const [data, setData] = useState([])
    useEffect(() => {
        firestore().collection('Student').orderBy('TimeStamp', 'desc').onSnapshot(function (querySnapshot) {
            setData(
                querySnapshot.docs.map((doc) => ({
                    Id: doc.id,
                    fn: doc.data().FirstName,
                    ln: doc.data().LastName,
                    age: doc.data().Age,
                    gender: doc.data().Gender,
                    StudentEmail: doc.data().StudentEmail,
                    skills: doc.data().Skills,
                    qualification: doc.data().Qualification,
                    department: doc.data().Department,
                    DateTime: doc.data().DateTime,
                    pn: doc.data().PhoneNum,
                    type: doc.data().Type,
                }))

            )
        })
    }, [])


    const [search, setSearch] = useState("")
    const filterSearch = data.filter((f) => {
        return f.department.toLowerCase().includes(search.toLowerCase())
    })

    const [searc, setSearc] = useState("")
    const filterSearc = data.filter((f) => {
        return f.skills.toLowerCase().includes(searc.toLowerCase())
    })

const del = (StudentEmail)=>{
    console.log(StudentEmail)
    firestore().collection('Student').doc(StudentEmail).delete()
}

const edit = (StudentEmail)=>{
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
            }}>Student's List</Text>
            <Text style={{
                color: 'white', fontWeight: 'bold', marginVertical: 15, fontSize: 20,
                textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
            }}></Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12, marginBottom: 1, width: '100%', }}>
            <Text style={{
                color: '#3b7ae4', fontWeight: 'bold', fontSize: 18,
                textShadowColor: 'grey', textShadowOffset: { width: 0.2, height: 0.1 }, textShadowRadius: 1,
            }}>Short List Students By Search</Text>
        </View>


        <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#ffff', borderRadius: 25, marginTop: 15, marginBottom: 10, marginHorizontal: 25, paddingHorizontal: 15, elevation: 4, alignItems: 'center' }} >
            <RNPickerSelect onValueChange={(text) => { setSearch(text) }}
                placeholder={{ label: "Search by Departments", value: '', }}
                style={{ ...pickerSelectStyles }}
                useNativeAndroidPickerStyle={false}
                items={[
                    { label: 'All Departments', value: '' },
                    { label: 'Computer Science', value: 'Computer Science' },
                    { label: 'Software Engr.', value: 'Software Engr.' },
                    { label: 'Civil Engr.', value: 'Civil Engr.' },
                    { label: 'Electronics Engr.', value: 'Electronics Engr.' },
                ]}
            />
            <Ionicons name="search" size={17} color="grey" />
        </TouchableOpacity>


        <ScrollView style={styles.end}>
            {filterSearch.map((d, i) => {
                return <>
                    {/* {filterSearc.map((d, i) => {
                        return  */}
                        <TouchableOpacity activeOpacity={0.8} style={{}} key={i} onPress={() => {
                            // navigation.navigate('Main', {
                            //     key: d.Id,
                            //     // cn: d.cn,
                            // })
                        }} style={styles.data} >

                            <View style={{
                                // justifyContent: 'space-between',
                                // flexDirection: 'row',
                            }}>


                                {(datar.UserEmail) == 'admin@admin.com' ? <View style={{position:'absolute', right:-50}}>

                                    <TouchableOpacity activeOpacity={0.4} onPress={() => {del(d.StudentEmail)}}
                                        style={{ marginVertical: 14, width: 30, borderRadius: 50 }}>
                                        <Text style={{
                                            color: 'black', fontWeight: 'bold', fontSize: 27,
                                            textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
                                        }}><MaterialCommunityIcons name="delete" size={30} color="black" /></Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity activeOpacity={0.4} onPress={() => { navigation.navigate('ES',{
                                        email: d.StudentEmail
                                    })
                                }
                                
                                }
                                        style={{ marginVertical: 14, width: 30, borderRadius: 50 }}>
                                        <Text style={{
                                            color: 'black', fontWeight: 'bold', fontSize: 27,
                                            textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
                                        }}><FontAwesome name="edit" size={30} color="black" /></Text>
                                    </TouchableOpacity>
                                </View>
                                    : <></>}

                                <View style={{ alignItems: 'center' }}>
                                    {d.gender == 'Female' ?
                                        <Image source={require('./Images/female.png')}
                                            style={{ width: 90, height: 90, borderRadius: 50, }} />
                                        :
                                        <Image source={require('./Images/male.webp')}
                                            style={{ width: 90, height: 90, borderRadius: 50, }} />
                                    }
                                </View>
                                <View>
                                    <Text style={{ fontSize: 15, paddingTop: 14 }}><Ionicons name="md-person-circle" size={12.5} color="black" />  FName:    {d.fn}</Text>
                                    <Text style={{ fontSize: 15, paddingTop: 2 }}><Ionicons name="md-person-circle-outline" size={12.5} color="black" />  LName:    {d.ln}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><Fontisto name="person" size={11.3} color="black" />   Age:          {d.age}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><MaterialCommunityIcons name="gender-male-female" size={11.3} color="black" />  Gender:     {d.gender}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><FontAwesome name="building" size={12} color="black" />   Depart:     {d.department}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><Fontisto name="code" size={11.3} color="black" />  Skills:        {d.skills}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><FontAwesome name="graduation-cap" size={12} color="black" />  Qualifi:      {d.qualification}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><MaterialCommunityIcons name="email" size={11.3} color="black" />   Email:        {d.StudentEmail}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><FontAwesome name="phone" size={12} color="black" />    Phone:      {d.pn}</Text>
                                    <Text style={{ fontSize: 15, textTransform: 'capitalize', paddingTop: 2 }}><Entypo name="back-in-time" size={11.3} color="black" />   Reg At:      {d.DateTime}</Text>
                                </View>
                            </View>

                            {/* <TouchableOpacity style={{backgroundColor:"#3b7ae4", borderRadius:15,  marginVertical: 15}} onPress={() => {}}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#ffff',paddingHorizontal:20,paddingVertical:5,
                             }}>  Apply  </Text>
                        </TouchableOpacity> */}

                        </TouchableOpacity>
                    {/* })} */}
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
        margin: 15,
        backgroundColor: "#ffff",
        elevation: 5,
        borderRadius: 15,
        padding: 10,
        // paddingLeft:18
    },

    end:{
        marginBottom:160,
    }

});

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        width: 160,
        fontSize: 14,
        color: "grey",
        paddingVertical: 7,
    },
    placeholder: {
        color: 'grey',
    },
});