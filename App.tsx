import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EventStackScreen from './src/screens/event'
import ExEventStackScreen from './src/screens/exEvent'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
        <Tab.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
        >

          <Tab.Screen
            name="EventsStack"
            component={EventStackScreen} 
            options={{
              tabBarLabel: 'Etkinlikler',
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="event-available" style={{color:'black',fontSize:30}} />
              ),
            }}
            />

          <Tab.Screen
            name="ExEventsStack"
            component={ExEventStackScreen} 
            
            options={{
              tabBarLabel: 'Geçmiş Etkinlikler' ,
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="event-busy" style={{color:'black',fontSize:30}} />
              ),
            }}
            />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;

