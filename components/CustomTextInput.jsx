import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput } from "react-native";
import { font, size } from "../config/GlobalSetting";

const { padding, width } = size;
const { mediumFont } = font;
const CustomTextInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = () => {
    const value = parseInt(searchInput);
    if (value) {
      console.log(value);
      return;
    }
    console.log("Input", searchInput);
    setSearchInput("");
  };
  return (
    <KeyboardAvoidingView style={[styles.inputContainer]}>
      <TextInput
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
        style={[styles.textInput]}
        onSubmitEditing={handleSubmit}
        placeholder="Ex:Enigma or Num:20"
        returnKeyType="Done"
      />
    </KeyboardAvoidingView>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: width * 0.6,
    paddingHorizontal: padding,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: padding,
    borderRadius: padding,
    fontSize: mediumFont,
    backgroundColor: "#fff",
  },
});
