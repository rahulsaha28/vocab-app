import { ResizeMode, Video } from "expo-av";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View>
      <Video
        source={{
          uri:"https://github.com/rahulsaha28/eng-videos/raw/refs/heads/main/Chak_De_India.mp4"
        }}
        useNativeControls
        style={{ width: "100%", height: 600 }}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
