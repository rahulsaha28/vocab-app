import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { useCGrammerVideoStore } from "../store/useVocabStore";

const videoDetail = () => {
  const { videoId } = useLocalSearchParams();

  const { parseVideosById, videos } = useCGrammerVideoStore((state) => state);

  useEffect(() => {
    parseVideosById(videoId);
    
  }, [videoId]);

  return (
    <View>
      {
        <FlatList
          keyExtractor={(item) => item}
          data={videos}
          renderItem={({ item }) => (
            <YoutubeIframe width={"100%"} height={300} videoId={item} />
          )}
        />
      }
    </View>
  );
};

export default videoDetail;

const styles = StyleSheet.create({});
