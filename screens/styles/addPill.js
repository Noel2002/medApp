import { StyleSheet } from "react-native"
import { colors } from "../../macros/colors"
export const styles = StyleSheet.create({
    container: {
       paddingVertical: 40,
       paddingHorizontal: 40,
       alignItems: "center",
       flex: 1,
    },
    formTitle: {
        fontSize: 24,
        color: colors.text.secondary,
        fontWeight: 'bold'
    },
    formContainer:{
        width:"100%",
        marginTop: 30,

    },
    label: {
        color: 'grey',

    },
    input:{
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 2,
        fontSize: 18,
        marginBottom: 20
    },
    timeInputWrapper:{
        flexDirection:"row",
        width: "100%",
        marginBottom: 10
    },
    timeInput:{
        flex: 1,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
    },
    timeCaption: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    commitBtn:{
        alignItems: "center",
        borderColor: colors.secondary,
        paddingVertical: 10,
        borderWidth: 1,
        marginTop: 20
    },
    commitBtnCAption:{
        fontSize: 18,
        color: colors.secondary,

    },
    readyWrapper:{
        width: "100%",
        flex: 1,
        justifyContent: "space-between"
    },
    readyContainer:{
        width: "100%",
        marginTop: 30
    },
    readyTitle:{
        marginBottom: 16,
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 18,
    },
    addAllBtn:{
        backgroundColor: colors.primary,
        paddingVertical: 8,
        width: "100%"
    },
    addAllBtnCaption:{
        textAlign: "center",
        color:"white",
        fontSize: 18,
        fontWeight: "bold"
    }
})