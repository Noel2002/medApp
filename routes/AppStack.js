import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Homestack from "./Homestack";

const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Homestack,
        
    }
}
const AppsStack = createStackNavigator(
    screens,
    {
        headerMode: 'none'
    }
);
export default createAppContainer(AppsStack);