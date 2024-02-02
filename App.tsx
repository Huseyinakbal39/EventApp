import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import EventStackScreen from './src/screens/event'



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
              tabBarLabel: 'Event',
            }}
            />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App;

