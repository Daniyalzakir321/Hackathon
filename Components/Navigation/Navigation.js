import React, { useEffect, useState, useRef } from 'react';
import { Button, View, Modal, StatusBar, Image, Dimensions, Text, } from 'react-native';
import auth from '@react-native-firebase/auth';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../Main';
import Signin from '../Signin';
import Admin from '../Admin';
import Student from '../Student';
import Company from '../Company';
import AdminDashboard from '../AdminDashboard';
import StudentDashboard from '../StudentDashboard';
import CompanyDashboard from '../CompanyDashboard';
import Companies from '../Companies';
import Vacancies from '../Vacancies';
import Students from '../Students';
import PostNewVacancies from '../PostNewVacancies.js';
import Ec from '../EditCompany';
import Es from '../EditStudent';

const { width, height } = Dimensions.get('window');

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default function Navigation() {
  // // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  const [modal, setModal] = useState(true)
  setTimeout(() => {
    setModal(false)
  }, 3000);

  return (
    modal
      ?
      <Modal visible={modal} animationType="slide">
        <StatusBar backgroundColor="#3b7ae4" style={{ color: 'white' }} barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: '#3b7ae4', alignItems: 'center' }} >

          <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 27, marginTop: 100 }}>Campus Recruitment</Text>
          <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 27 }}>System</Text>

          <Image source={require('../Images/splasht.png')}
            style={{ backgroundColor: '#3b7ae4', resizeMode: 'contain', height: 200, marginTop: 30 }} />
          {/* <Image source={require('../Images/splasht.png')}
              style={{ flex: 1, backgroundColor: '#3b7ae4', width: "50%", resizeMode: 'contain', }} />
            <Image source={require('../Images/splashb.png')}
              style={{ flex: 1, backgroundColor: '#3b7ae4', width: "70%", resizeMode: 'contain' }} /> */}
        </View>
      </Modal>
      :

      <NavigationContainer>
        <Stack.Navigator >
          {/* {(!user)?
           <>    */}
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
          <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }} />
          <Stack.Screen name="Student" component={Student} options={{ headerShown: false }} />
          <Stack.Screen name="Company" component={Company} options={{ headerShown: false }} />
          {/* </>
          :
           <> */}
          <Stack.Screen name="Vacancies" component={Vacancies} options={{ headerShown: false }} />
          <Stack.Screen name="Companies" component={Companies} options={{ headerShown: false }} />
        
          <Stack.Screen name="Students" component={Students} options={{ headerShown: false }} />
          <Stack.Screen name="PostNewVacancies" component={PostNewVacancies} options={{ headerShown: false }} />
          
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ headerShown: false }}/>
          <Stack.Screen name="StudentDashboard" component={StudentDashboard} options={{ headerShown: false }} />
          <Stack.Screen name="CompanyDashboard" component={CompanyDashboard} options={{ headerShown: false }} />
          
          <Stack.Screen name="ES" component={Es} options={{ headerShown: false }} />
          <Stack.Screen name="EC" component={Ec} options={{ headerShown: false }} />
         
          {/* </>
            } */}
        </Stack.Navigator>
      </NavigationContainer>
  )
}