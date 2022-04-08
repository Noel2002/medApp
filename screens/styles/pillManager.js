import {StyleSheet} from 'react-native';
import { colors } from '../../macros/colors';

const addButtonSize = 50;

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: 20,
        paddingBottom: 40,

    },
    cartoon:{
        marginTop: 20,
        alignItems: 'center'
    },
    banner:{
        marginTop: 30,

    },
    headerTitle:{
        fontSize: 24,
        color: colors.text.secondary,
        fontWeight:'bold',
        textAlign: 'center'

    },
    message:{
        fontSize: 16,
        color: colors.text.secondary,
        textAlign:'center'
        
    },
    sectionHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text.secondary,
        textTransform: 'capitalize',
        marginBottom: 10,
        marginTop: 20
    },
    addButton:{
        width: addButtonSize,
        height: addButtonSize,
        borderRadius: addButtonSize/2,
        backgroundColor: colors.text.primary,
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    addButtonCaption:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        
    }
});