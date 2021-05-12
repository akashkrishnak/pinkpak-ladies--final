import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { set } from "react-native-reanimated";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <Text h3 style={{ marginBottom: 50 }}>
        Create a PinkPal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={pass}
          onChangeText={(text) => setPass(text)}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Register"
        onPress={() => props.navigation.navigate("Default")}
      />
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

export default RegisterScreen;
