import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Rating from "../../components/Rating.jsx";
import { colors, font, size } from "../../config/GlobalSetting.js";
import { useVocabStore } from "../../store/useVocabStore.js";

const { padding, height } = size;
const { mediumFont, largeFont } = font;

const Home = () => {
  const { getVocab, vocabStore } = useVocabStore((state) => state);
  useEffect(() => {
    getVocab(10);
  }, []);

  const loadMoreData = () => {
    getVocab(10);
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        key={(item) => item["Word"]}
        data={vocabStore}
        scrollEventThrottle={16}
        snapToInterval={height / 5 + padding}
        ListFooterComponent={
          <View>
            <ActivityIndicator size="large" color={colors["color-1"]} />
          </View>
        }
        onEndReached={loadMoreData}
        renderItem={({ item, index }) => {
          return (
            <View style={[styles.cartContainer]}>
              <View style={[styles.cartHeading]}>
                <Text style={[styles.headingStyle]}>{item["Word"]}</Text>
                {item["rate"] && <Rating rating={parseInt(item["rate"])} />}
                <View style={[styles.indexStyle]}>
                  <Text
                    style={{ color: "white", fontSize: 16, fontWeight: "600" }}
                  >
                    {index + 1}
                  </Text>
                </View>
              </View>
              <View style={[styles.cartBody]}>
                <Text style={[styles.bodyText]}>{item["Meaning"]}</Text>
              </View>
            </View>
          );
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
  headingStyle: {
    fontSize: largeFont,
    fontWeight: "bold",
  },
  indexStyle: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: colors["color-3"],
  },
  cartContainer: {
    padding,
    marginVertical: padding / 2,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: padding / 2,
    height: height / 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cartHeading: {
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: padding / 2,
  },
  cartBody: {},
  bodyText: {
    fontSize: mediumFont + 4,
  },
});
