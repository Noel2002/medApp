import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Alerts from "../screens/Alerts";
import Emergency from "../screens/Emergency";
import PillManager from "../screens/PillManager";
import AddPill from "../screens/AddPill";
import Login from "../screens/Login";


const screens = {
    Home : {
        screen: Home,
        navigationOptions:{
            title: "Home", 
            headerLeft: ()=> null
        }

    },
    Alerts: {
        screen: Alerts,
    }, 
    Emergency :{
        screen: Emergency
    }, 
    PillManager:{
        screen: PillManager,
    },
    AddPill:{
        screen: AddPill,
    },
    Login:{
        screen: Login
    }
}
const Homestack = createStackNavigator(screens);
export default createAppContainer(Homestack);