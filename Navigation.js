import { StackNavigator } from "react-navigation";
import HomeScreen from "./screens/home/index";

const Navigation = StackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#ddd"
      }
    }
  }
);

export default Navigation;
