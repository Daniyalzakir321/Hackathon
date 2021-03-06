  
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, Alert, StatusBar, Image, Modal, TouchableOpacity, ActivityIndicator, PermissionsAndroid } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import { Content, Item, Input, Label, Button, Text, Left, Body, Right, Icon, } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
import { useSelector } from 'react-redux'
import Signup from './Signup';

export default function Student({navigation}) {
    const datad = useSelector(state => state.user)
    console.log(datad.UserEmail)



    const [su, setsu] = useState(false)
    setTimeout(() => {
        setsu(false)
    }, 6000);

    // Date Time
    var today = new Date();
    var dateTime = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear() + "    " +
        today.getHours() + ":" + today.getMinutes();

    const [fn, setFn] = useState('')
    const [ln, setLn] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [qualification, setQualification] = useState('')
    const [skills, setSkills] = useState('')
    const [department, setDepartment] = useState('')
    const [pn, setPn] = useState('')
    const [signupemail, setSignupemail] = useState('')
    const [signuppassword, setSignuppassword] = useState('')

    const userSignUp = () => {
        if (fn.length == '' || ln.length == '' || age.length == '' || pn.length == '') {
            Alert.alert("User Information", "Text Field Can Not Be Empty")
        }
        else if (pn.length < 11) {
            Alert.alert("Phone Number", "Please Enter 11 Digits Phone Number")
        }
        else if (gender == null) {
            Alert.alert("Gender", "Please Select Gender")
        }
        else if (qualification == '') {
            Alert.alert("Qualification", "Please Enter Qualification")
        }
        else if (skills == '') {
            Alert.alert("Skills", "Please Enter Skills")
        }
        else if (department == null) {
            Alert.alert("Department", "Please Select Department")
        }
        else if (signupemail.length == '') {
            Alert.alert("Email", "Please Enter Email")
        }
        else if (signuppassword.length == '') {
            Alert.alert("Password", "Please Enter Password")
        }
        else if (signuppassword.length < 6) {
            Alert.alert("Password", "Minimum 6 Character Or Digits")
        }
        else {
            setsu(true)
            auth().createUserWithEmailAndPassword(signupemail, signuppassword)
                .then(() => {
                    firestore().collection('Student').doc(signupemail).set({
                        FirstName: fn,
                        LastName: ln,
                        Age: age,
                        Gender: gender,
                        Skills: skills,
                        Qualification: qualification,
                        Department: department,
                        PhoneNum: pn,
                        Type:'Student',
                        StudentEmail: signupemail,
                        DateTime: dateTime,
                        TimeStamp: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(() => {
                        setFn("")
                        setLn("")
                        setAge("")
                        setGender("")
                        setQualification("")
                        setSkills("")
                        setDepartment("")
                        setPn("")
                        setSignupemail("")
                        setSignuppassword("")
                        // navigation.replace('Signin')
                        navigation.goBack()
                        Alert.alert('Congratulations! ' +fn , 'You Are Successfully Registered As a Student! Proceed To LogIn');
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        Alert.alert('This email address is already in use!');
                    }
                    if (error.code === 'auth/invalid-email') {
                        Alert.alert('This email address is invalid!');
                    }
                    if (error.code === 'auth/weak-password') {
                        Alert.alert('Weak Password!');
                    }
                    // if (error) {
                    // Alert.alert("Error", error.message);
                    // }
                    // console.error(error);
                    // console.log(error.message);
                })
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#3b7ae4", width: '100%', height: '100%', justifyContent: 'center' }}>

            <Content style={{ marginHorizontal: 25, marginTop: 1 }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}
                        style={{ marginLeft: -20, marginVertical: 14, width: 30 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 27, }}>
                            <Ionicons name="md-chevron-back" size={30} color="#ffff" />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 18, fontSize: 18 }}>CREATE STUDENT ACCOUNT</Text>
                    <Text></Text>
                </View>



                <Item floatingLabel style={{ marginBottom: 15, marginTop: 1, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>First Name</Label>
                    <Input
                        maxLength={20}
                        keyboardType='default'
                        style={{ color: '#ffff' }}
                        onChangeText={text => setFn(text)}
                        value={fn} />
                </Item>

                <Item floatingLabel style={{ marginBottom: 14, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>Last Name</Label>
                    <Input
                        maxLength={20}
                        keyboardType='default'
                        style={{ color: '#ffff' }}
                        onChangeText={text => setLn(text)}
                        value={ln} />
                </Item>

                <Item floatingLabel style={{ marginBottom: 18, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>Age</Label>
                    <Input
                       maxLength={2}
                       keyboardType='number-pad'
                        style={{ color: '#ffff' }}
                        onChangeText={text => setAge(text)}
                        value={age} />
                </Item>

 <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, }}>

<View style={{ width: '48%', }}>
    <RNPickerSelect onValueChange={(text) => { setGender(text) }}
        placeholder={{ label: "Gender ▼", value: null }}
        style={{ ...pickerSelectStyles }}
        itemStyle={{ color: "white" }}
        useNativeAndroidPickerStyle={false}
        items={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
        ]}
    />
</View>

<View style={{ width: '50%' }}>
    <RNPickerSelect onValueChange={(text) => { setDepartment(text) }}
        placeholder={{ label: "Departments ▼", value: null, }}
        style={{ ...pickerSelectStyles }}
        useNativeAndroidPickerStyle={false}
        items={[
            { label: 'Computer Science', value: 'Computer Science' },
            { label: 'Software Engr.', value: 'Software Engr.' },
            { label: 'Civil Engr.', value: 'Civil Engr.' },
            { label: 'Electronics Engr.', value: 'Electronics Engr.' },
        ]}
    />
</View>
</View>
                <Item floatingLabel style={{ marginBottom: 14, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>Qualification</Label>
                    <Input
                        maxLength={20}
                        keyboardType='default'
                        style={{ color: '#ffff' }}
                        onChangeText={text => setQualification(text)}
                        value={qualification} />
                </Item>

                <Item floatingLabel style={{ marginBottom: 14, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>Skills</Label>
                    <Input
                        maxLength={20}
                        keyboardType='default'
                        style={{ color: '#ffff' }}
                        onChangeText={text => setSkills(text)}
                        value={skills} />
                </Item>

                <Item floatingLabel style={{ marginBottom: 14, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>Phone Number</Label>
                    <Input
                        maxLength={11}
                        keyboardType='number-pad'
                        style={{ color: '#ffff' }}
                        onChangeText={text => setPn(text)}
                        value={pn} />
                </Item>

                <Item floatingLabel style={{ marginBottom: 13, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>Email</Label>
                    <Input
                        maxLength={20}
                        keyboardType="email-address"
                        style={{ color: '#ffff' }}
                        onChangeText={text => setSignupemail(text)}
                        value={signupemail} />
                </Item>

                <Item floatingLabel style={{ marginBottom: 15, color: '#ffff' }}>
                    <Label style={{ color: '#ffff' }}>Password</Label>
                    <Input
                        maxLength={15}
                        secureTextEntry={true}
                        style={{ color: '#ffff' }}
                        onChangeText={text => setSignuppassword(text)}
                        value={signuppassword} />
                </Item>


                <TouchableOpacity activeOpacity={0.7}
                    style={{ elevation: 3, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffff', marginTop: 1, margin: 5, height: 50, borderRadius: 50, }}
                    onPress={() => { userSignUp() }}>
                    {su ?
                        <ActivityIndicator size="small" color="black" />
                        :
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>CREATE</Text>
                    }
                </TouchableOpacity>

            </Content>
        </View>


    )
}



const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 17,
        paddingTop: 7,
        paddingBottom: 4.5,
        borderBottomColor: '#E9DCDC',
        borderBottomWidth: 1,
        color: "white"
    },
    placeholder: {
        color: 'white',
    },
});