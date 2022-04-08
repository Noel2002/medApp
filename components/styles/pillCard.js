import {StyleSheet} from 'react-native';
import { colors } from '../../macros/colors';

export const styles = StyleSheet.create({
    container:{
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.light.primary,
        marginBottom: 10
    },
    textPart:{
        marginLeft: 15,
    },
    pillName:{
        fontWeight:'bold',
        fontSize: 16,
        color: colors.text.secondary
    },
    time:{
        color: colors.text.primary,
    }
});