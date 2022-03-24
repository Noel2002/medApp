import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Alerts from "../screens/Alerts";
import Emergency from "../screens/Emergency";


const screens = {
    Home : {
        screen: Home,

    },
    Alerts: {
        screen: Alerts,
    }, 
    Emergency :{
        screen: Emergency
    }
}
const Homestack = createStackNavigator(screens);
export default createAppContainer(Homestack);