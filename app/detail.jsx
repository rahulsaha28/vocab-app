import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../config/GlobalSetting.js";
import GlobalStyle from "../config/GlobalStyle.js";
import { useVocabStore } from "../store/useVocabStore.js";

const page = () => {
  const { index } = useLocalSearchParams();
  const [item, setItem] = useState({});
  const { getVocabByIndex } = useVocabStore((state) => state);
  useEffect(() => {
    setItem(getVocabByIndex(index));
  }, [index]);
  return (
    <View>
      <View style={[{ alignItems: "center", justifyContent: "center" }]}>
        <Text style={[GlobalStyle.heading, styles.header]}>{item["Word"]}</Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item}
          data={item["Sentence"]}
          renderItem={({ item, index }) => {
            return (
              <View style={[styles.container]}>
                <View style={[styles.wrapper]}>
                  <Text style={[GlobalStyle.title]}>{index + 1}.</Text>
                  <Text style={[GlobalStyle.title]}>{item}.</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default page;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  wrapper: {
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,.08)",
  },
  header: {
    backgroundColor: colors["h-yellow"],
    borderRadius: 10,
    marginTop: 10,
  },
});
