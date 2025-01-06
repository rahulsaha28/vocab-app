import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

const Player = ({ videoID }) => {
  const [loading, setLoading] = useState(true);
  const url = `https://www.youtube.com/embed/${videoID}?showinfo=0&cc_load_policy=1&cc_lang_pref=en&rel=0&autohide=1`;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && <ActivityIndicator size="large" color="tomato" />}
      <WebView
        height={300}
        width={370}
        onLoadEnd={() => setLoading(false)}
        style={[styles.playerStyle]}
        source={{
          uri: url,
        }}
        textZoom={80}
        onPlaybackQualityChange={() => "hd720"}
        showSubtitles={true}
      />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  playerStyle: {
    overflow: "hidden",
  },
});
