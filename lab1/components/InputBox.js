import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputBox = ({ inpTitle }) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{inpTitle}</Text>
      <TextInput style={styles.inputBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: { fontWeight: "400", fontSize: 17 },
  inputBox: {
    height: 50,
    marginBottom: 20,
    backgroundColor: "#ffff",
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
  },
});

export default InputBox;
