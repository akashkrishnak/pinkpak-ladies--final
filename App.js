import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DefaultScreen from "./src/screens/DefaultScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LocateScreen from "./src/screens/LocateScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkUizmockStpXNt2H_ZVvJTuPlheQhjHA",
  authDomain: "tryouts-87117.firebaseapp.com",
  projectId: "tryouts-87117",
  storageBucket: "tryouts-87117.appspot.com",
  messagingSenderId: "720400475941",
  appId: "1:720400475941:web:1d74f9f22279cc8d82dccc",
  measurementId: "G-B197X6J6XK",
};

firebase.initializeApp(firebaseConfig);

const navigator = createStackNavigator(
  {
    Default: DefaultScreen,
    Search: SearchScreen,
    Locate: LocateScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Women's App",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
