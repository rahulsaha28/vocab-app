import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import VideoItem from "../../../components/VideoItem.jsx";
import { size } from "../../../config/GlobalSetting.js";
import { useCGrammerVideoStore } from "../../../store/useVocabStore.js";

const max = 10;
const { padding, height } = size;
const Home = () => {
  const { videoStore, getVideoStore } = useCGrammerVideoStore((state) => state);
  useEffect(() => {
    getVideoStore(max);
  }, []);
  return (
    <View style={[styles.container]}>
      <FlatList
        keyExtractor={(item) => item["Type"]}
        data={videoStore}
        snapToInterval={height / 10 + padding}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <VideoItem {...item} index={index} />}
        ListFooterComponent={
          <View>
            <ActivityIndicator size="large" color="tomato" />
          </View>
        }
        onEndReachedThreshold={0.6}
        onEndReached={() => getVideoStore(max)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
