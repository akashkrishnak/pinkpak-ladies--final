import React from 'react';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DefaultScreen from "./src/screens/DefaultScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LocateScreen from "./src/screens/LocateScreen";

const navigator = createStackNavigator(
  {
    Default: DefaultScreen,
    Search: SearchScreen,
    Locate: LocateScreen,
  },
  {
    initialRouteName: "Default",
    defaultNavigationOptions: {
      title: "Women's App",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <App />
  );
};