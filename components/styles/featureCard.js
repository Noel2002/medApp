import { StyleSheet } from "react-native";
import { colors } from "../../macros/colors";


export const styles = StyleSheet.create({
    container:{
        width: '50%',
        paddingHorizontal: 7,
        marginTop: 15,

    },
    innerContainer:{
        backgroundColor: colors.light.primary,
        paddingHorizontal:10,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',

    },
    caption:{
        fontSize: 16,
        textAlign: "center",
        paddingTop: 8,
        minHeight: 50,
        fontWeight:'500',
        color: colors.text.secondary,


    }
});