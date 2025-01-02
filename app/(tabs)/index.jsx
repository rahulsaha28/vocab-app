import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import VocabItem from "../../components/VocabItem.jsx";
import { colors, size } from "../../config/GlobalSetting.js";
import { useVocabStore } from "../../store/useVocabStore.js";

const { padding, height, width } = size;

const Home = () => {
  const { getVocab, vocabStore, toggleShow, show } = useVocabStore(
    (state) => state
  );
  useEffect(() => {
    getVocab(10);
  }, []);

  const loadMoreData = () => {
    getVocab(10);
  };

  return (
    <View style={[styles.container]}>
      <View style={[{ position: "absolute", left: 10, zIndex: 1, width: 50 }]}>
        <Pressable onPress={toggleShow} style={[styles.buttonStyle]}>
          {show ? (
            <AntDesign name="eyeo" size={24} color={"white"} />
          ) : (
            <MaterialCommunityIcons name="eye-off" size={24} color={"white"} />
          )}
        </Pressable>
      </View>
      <FlatList
        key={(item) => item["Word"]}
        data={vocabStore}
        scrollEventThrottle={16}
        snapToInterval={height / 3.5 + padding}
        ListFooterComponent={
          <View>
            <ActivityIndicator size="large" color={colors["color-1"]} />
          </View>
        }
        onEndReached={loadMoreData}
        renderItem={({ item, index }) => {
          return <VocabItem index={index} item={item} />;
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding,
  },
  buttonStyle: {
    backgroundColor: colors["color-4"],
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: (width * 0.1) / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
});
