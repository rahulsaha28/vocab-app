import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import YoutubeIframe from "react-native-youtube-iframe";

const Player = ({ videoID }) => {
  const [loading, setLoading] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading && <ActivityIndicator size="large" color="tomato" />}
      <YoutubeIframe
        height={400}
        width={370}
        videoId={videoID}
        onChangeState={(state) => {
          if (state === "playing" || state === "paused" || state === "ended") {
            setLoading(false);
          }
        }}
        onReady={() => {
          setLoading(false);
        }}
        onPlaybackQualityChange={() => "hd720"}
      />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  playerStyle: {
    width: 350,
    borderRadius: 20,
  },
});
