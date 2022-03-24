import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export const cards = [
    {
        cardCaption: 'Consumption Alarm',
        Icon: FontAwesome5,
        iconName: 'user-clock',
        screen: 'Home'
    },
    {
        cardCaption: 'Overdose Alert',
        Icon: MaterialCommunityIcons,
        iconName: 'cellphone-message',
        screen: 'Alerts'

    },
    {
        cardCaption: 'Not Carrying & Disconneted Alarm',
        Icon: MaterialCommunityIcons,
        iconName: 'cellphone-nfc-off',
        screen: 'Home'

    },
    {
        cardCaption: 'IR Sensed Reminder',
        Icon: MaterialCommunityIcons,
        iconName: 'reminder',
        screen: 'Home'

    },
    {
        cardCaption: 'Family Monitoring',
        Icon: MaterialIcons,
        iconName: 'family-restroom',
        screen: 'Home'

    },
    {
        cardCaption: 'Sound & LED',
        Icon: MaterialCommunityIcons,
        iconName: 'antenna',
        screen: 'Home'

    },
    {
        cardCaption: 'Refill Alarm',
        Icon: MaterialCommunityIcons,
        iconName: 'alarm-multiple',
        screen: 'Home'

    },
    {
        cardCaption: 'Emergency',
        Icon: FontAwesome5,
        iconName: 'exclamation-circle',
        screen: 'Emergency'

    },

]