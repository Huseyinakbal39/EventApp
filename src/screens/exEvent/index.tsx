import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExEventsScreen from './ExEventScreen';
import ExEventDetailScreen from './ExEventDetailScreen';

const EventStack = createNativeStackNavigator();

const ExEventStackScreen = () => {
    return (<>
        <EventStack.Navigator
            screenOptions={
                {
                    headerShown: true
                }
            }
        >
            <EventStack.Screen name="Etkinlik" component={ExEventsScreen} />
            <EventStack.Screen name="Etkinlik Detayları" component={ExEventDetailScreen} />
        </EventStack.Navigator>
    </>
    )
}

export default ExEventStackScreen