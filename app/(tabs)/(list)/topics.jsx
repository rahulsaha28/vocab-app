import { router } from "expo-router";
import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../config/GlobalSetting.js";
import { useTopicsDetailStore } from "../../../store/useIeltsTopicsStore.js";

const topics = () => {
  const { topicsDetail, getTopicsDetail } = useTopicsDetailStore(
    (state) => state
  );

  useEffect(() => {
    getTopicsDetail();
  }, []);

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index}
        data={topicsDetail}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.container]}
            onPress={() => {
              router.push({
                pathname: "topicsDetail",
                params: { id: index },
              });
            }}
          >
            {item["Topics"] && (
              <Text style={[styles.title]}>{item["Topics"]}</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default topics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors["bg-color"],
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors["color-1"],
  },
});
