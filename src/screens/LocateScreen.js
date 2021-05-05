import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Call from "../Components/Call";

const LocateScreen = () => {
  return (
    <View>
      <Image style={styles.img} source={require("../img/pinkpal.png")} />
      <Text style={styles.txt}>
        Your location has been tracked by the police and nearest volunteers.
        Help is on the way
      </Text>
      <Call />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    marginLeft: 45,
  },
  txt: {
    color: "#b80646",
    fontSize: 20,
    marginLeft: 60,
    marginRight: 40,
  },
});

export default LocateScreen;
