import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import { StyleSheet, View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Modal, Dimensions, StatusBar, Alert , } from 'react-native'
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Content, Item, Input, Label, Button, Left, Body, Right, Icon, } from 'native-base';

import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux';
import * as auththenticate from './Store/action';

export default function AdminDashboard({navigation, route}) {

    const SignOut = () => {
        auth().signOut()
        .then((res) => {
        console.log('LogOut Successful!')
        navigation.replace('Main')
        // dispatch(auththenticate.LogoutUser())
        })
        .catch(function(error) {
            console.log("Error", error.message);
        })
    }

    return (
        <View style={styles.container}>


<StatusBar  backgroundColor="#3b7ae4" />

<View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: "#3b7ae4", elevation: 5, width: '100%', }}>
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}
        style={{ marginLeft: -20, marginVertical: 14, width: 30, }}>
        <Text style={{
            color: 'white', fontWeight: 'bold', fontSize: 27,
            textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
        }}></Text>
    </TouchableOpacity>
    <Text style={{
        color: 'white', fontWeight: 'bold', marginVertical: 15, fontSize: 20,
        textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
    }}>Admin Dashboard</Text>
    <Text style={{
        color: 'white', fontWeight: 'bold', marginVertical: 15, fontSize: 20,
        textShadowColor: 'grey', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 5,
    }}></Text>
</View>

            <StatusBar  backgroundColor="#3b7ae4" />
            <Content style={styles.start}>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Students') }} style={{ backgroundColor: '#ffff', borderRadius: 10, padding: 20, paddingHorizontal: 25, alignItems: 'center', borderColor: "#3b7ae4", borderWidth: 3, marginTop:1 }} >
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}>Student's</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Companies') }} style={{ backgroundColor: '#ffff', borderRadius: 10, padding: 20, paddingHorizontal: 26, elevation: 5, alignItems: 'center', borderColor: "#3b7ae4", borderWidth: 3,marginTop:20 }} >
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}> Company's </Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('Vacancies') }} style={{ backgroundColor: '#ffff', borderRadius: 10, padding: 20, paddingHorizontal: 25, alignItems: 'center', borderColor: "#3b7ae4", borderWidth: 3, marginTop:20 }} >
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}>Vacancy's</Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity activeOpacity={0.8} onPress={() => { navigation.navigate('PostNewVacancies') }} style={{ backgroundColor: '#ffff', borderRadius: 10, padding: 20, paddingHorizontal: 26, elevation: 5, alignItems: 'center', borderColor: "#3b7ae4", borderWidth: 3,marginTop:20 }} >
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}> Post New Vacancy's </Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                        </TouchableOpacity> */}

                        <TouchableOpacity activeOpacity={0.8} onPress={() => { SignOut() }} style={{ backgroundColor: '#ffff', borderRadius: 10, padding: 20, paddingHorizontal: 26, elevation: 5, alignItems: 'center', borderColor: "#3b7ae4", borderWidth: 3, marginTop:20 }} >
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}> SignOut </Text>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#3b7ae4", textShadowColor: 'grey', textShadowOffset: { width: 0.1, height: 1 }, textShadowRadius: 2 }}></Text>
                        </TouchableOpacity>
                    </Content>
                    
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    start: {
        flex: 0.5,
        margin:30,
    },

    end: {
        marginTop: 8,
        flex: 1,
        backgroundColor: "#f4f0ef",
    },
    data: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
        backgroundColor: "#ffff",
        elevation: 5,
        borderRadius: 15,
        padding: 10,
        // paddingLeft:18
    }
})