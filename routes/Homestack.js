import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Alerts from "../screens/Alerts";
import Emergency from "../screens/Emergency";
import PillManager from "../screens/PillManager";


const screens = {
    Home : {
        screen: Home,

    },
    Alerts: {
        screen: Alerts,
    }, 
    Emergency :{
        screen: Emergency
    }, 
    PillManager:{
        screen: PillManager,
    }
}
const Homestack = createStackNavigator(screens);
export default createAppContainer(Homestack);