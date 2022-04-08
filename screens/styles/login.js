import { StyleSheet } from "react-native";
import { colors } from "../../macros/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 60
    },
    title:{
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 24,
        marginBottom: 40
    },
    formWrapper:{
        width: "100%"
    },
    formLabel:{
        fontSize: 16,
        color: "gray",
        marginTop: 30
    },
    input:{
        width: "100%",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1,
    },
    buttonsSection:{
        width:"100%",
        marginTop: 40

    },
    button:{
        width: "100%",
        paddingVertical: 10,
        marginVertical: 5
        
    },
    buttonCaption:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    signIn:{
        backgroundColor: colors.secondary
    },
    signInCaption:{
        color: "white"
    },
    signUp:{
        borderColor: colors.secondary,
        borderWidth: 1,
    },
    signUpCaption:{
        color: colors.secondary
    },
});