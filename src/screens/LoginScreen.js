import React, { useState, useEffect } from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Input, Button } from "react-native-elements";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../img/pinkpal.png")}
        style={{ width: 300, height: 150 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={pass}
          onChangeText={(pass) => {
            setPass(pass);
          }}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Login"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Register"
        onPress={() => {
          props.navigation.navigate("Register");
        }}
      />
      <View style={{ height: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: 200,
    marginTop: 30,
  },
  inputContainer: {
    width: 300,
  },
});

export default LoginScreen;
