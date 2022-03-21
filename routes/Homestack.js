import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Alerts from "../screens/Alerts";


const screens = {
    Home : {
        screen: Home,

    },
    Alerts: {
        screen: Alerts,
    }
}
const Homestack = createStackNavigator(screens);
export default createAppContainer(Homestack);