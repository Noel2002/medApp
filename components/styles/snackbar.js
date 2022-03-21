import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#DAA8AC',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPart:{
        marginLeft: 10,
        flex: 1,
    },
    topText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    date:{
        fontSize: 12
    },
    title:{
        fontWeight: 'bold',
    }
});