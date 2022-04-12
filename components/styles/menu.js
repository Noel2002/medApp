import { StyleSheet } from "react-native";
import { colors } from "../../macros/colors";

const radius = 15;
export const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: -radius,
        borderColor:'black',
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        backgroundColor: 'white',
        flex: 1,
    },
    sectionTitle:{
        color: colors.text.secondary,
        fontSize: 25,
        fontWeight: 'bold'
    },
    cardsWrapper:{
        flexDirection:'row',
        marginTop: 20,
        flexWrap:'wrap',
        marginBottom: 40,

    }
});