import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ButtonA from "../Components/ButtonA";

const DefaultScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <MaterialIcons name="account-circle" size={90} color="black" />
      <View style={styles.View}>
        <Image style={styles.imge} source={require("../img/pinkpal.png")} />
        <Text style={styles.txt}>
          For emergency press the help button below
        </Text>

        <ButtonA
          style={styles.Button}
          title="Help"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  View: {
    flexDirection: "column",
    alignItems: "center",
  },
  txt: {
    color: "#b80646",
    fontWeight: "bold",
    fontSize: 30,
    padding: 30,
  },
  Button: {
    height: 100,
    width: 280,
    marginTop: "15%",
    backgroundColor: "#b80646",
    fontSize: 40,
    borderRadius: 10,
  },
});

export default DefaultScreen;
