import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export const cards = [
    {
        cardCaption: 'Pill Reminder',
        Icon: FontAwesome5,
        iconName: 'user-clock',
        screen: 'PillManager'
    },
    {
        cardCaption: 'Add Pill',
        Icon: MaterialIcons,
        iconName: 'add-alert',
        screen: 'AddPill'

    },
    // {
    //     cardCaption: 'Overdose Alert',
    //     Icon: MaterialCommunityIcons,
    //     iconName: 'cellphone-message',
    //     screen: 'Alerts'

    // },
    // {
    //     cardCaption: 'Not Carrying & Disconneted Alarm',
    //     Icon: MaterialCommunityIcons,
    //     iconName: 'cellphone-nfc-off',
    //     screen: 'Home'

    // },
    // {
    //     cardCaption: 'IR Sensed Reminder',
    //     Icon: MaterialCommunityIcons,
    //     iconName: 'reminder',
    //     screen: 'Home'

    // },
    {
        cardCaption: 'User Account',
        Icon: MaterialIcons,
        iconName: 'family-restroom',
        screen: 'Login'

    },
    
    // {
    //     cardCaption: 'Refill Alarm',
    //     Icon: MaterialCommunityIcons,
    //     iconName: 'alarm-multiple',
    //     screen: 'Home'

    // },
    {
        cardCaption: 'Emergency',
        Icon: FontAwesome5,
        iconName: 'exclamation-circle',
        screen: 'Emergency'

    },

]

export const pills = [
    {
        name: 'Paracetamol',
        time: '10 : 30 am',
        partOfDay: 'morning',
        type: 'tablets',

    },
    {
        name: 'Coartem',
        time: '08 : 30 am',
        partOfDay: 'morning',
        type: 'tablets',

    },
    {
        name: 'Stresslin',
        time: '13 : 30 am',
        partOfDay: 'afternoon',
        type: 'drops',

    },
    {
        name: 'Paracetamol',
        time: '19 : 30 am',
        partOfDay: 'night',
        type: 'tablets',

    },
]