import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, ImageBackground, TouchableOpacity, Modal, Dimensions, StatusBar, Alert } from 'react-native'
const { width, height } = Dimensions.get('window');
import { Content, Item, Input, Label, Button, Left, Body, Right, Icon, } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Admin({ navigation, route }) {


    return (
        <View style={{ flex: 1, backgroundColor: "#3b7ae4", width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

            <Content style={{ marginHorizontal: 25, marginTop: 5 }}>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}
                        style={{ marginLeft: -20, marginVertical: 14, width: 30 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 27, }}>
                            <Ionicons name="md-chevron-back" size={30} color="#ffff" />
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 18, fontSize: 18 }}>DEFAULT ADMIN ACCOUNT</Text>
                    <Text></Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 100  }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 10, fontSize: 21 }}>ID:  admin@admin.com</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginVertical: 10, fontSize: 21 }}>Password:      admin321</Text>
                </View>
            </Content>
        </View>
    )
}
