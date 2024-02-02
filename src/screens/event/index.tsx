import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EventsScreen from './EventsScreen';
import EventDetailScreen from './EventDetailScreen';

const EventStack = createNativeStackNavigator();

const EventStackScreen = () => {
    return (<>
        <EventStack.Navigator
            screenOptions={
                {
                    headerShown: true
                }
            }
        >
            <EventStack.Screen name="Etkinlik" component={EventsScreen} />
            <EventStack.Screen name="Etkinlik Detayları" component={EventDetailScreen} />
        </EventStack.Navigator>
    </>
    )
}

export default EventStackScreen