import {StyleSheet} from 'react-native';
import { colors } from '../../macros/colors';
const sizeOfButton = 200;
const bRadius = 50;
export const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    panicButton:{
        backgroundColor: 'red',
        height: sizeOfButton,
        width: sizeOfButton,
        borderRadius: sizeOfButton /2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonCaption:{
        fontSize: 35,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    description:{
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: colors.text.primary,
        textAlign: 'center'

    },
    message:{
        textAlign: 'center',
        fontSize: 18
    },
    cancelbutton:{
        position: 'absolute',
        width: '100%',
        bottom: 10,
        left: 20,
        backgroundColor: 'black',
        padding: 8,
        marginHorizontal: 'auto'
    },
    cancelButtonCaption:{
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center'
    }

});