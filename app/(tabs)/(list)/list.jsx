import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { useWritingStore } from "../../../store/useWritingStore.js";
import IELTSItem from "../../../components/IELTSItem.jsx";
import { size } from "../../../config/GlobalSetting.js";


const max = 5;
const { padding, height } = size
const list = () => {
  const { writingStore, setWritingStore } = useWritingStore(state=>state);
  useEffect(()=>{
    setWritingStore(max);
  },[])
  return (
    <View style={[styles.container]}>
      <FlatList
       data={writingStore}
       keyExtractor={((item, index)=>item["word"]+index)}

       renderItem={({item, index})=><IELTSItem item={item} id={index} />}

       snapToInterval={height/10+padding}
       onEndReached={()=>setWritingStore(max)}
       ListFooterComponent={<ActivityIndicator size="large" color="tomato" />}
       onEndReachedThreshold={0.6}
       
      />
    </View>
  );
};

export default list;

const styles = StyleSheet.create({
  container:{
    // justifyContent:"center",
    // alignItems:"center"
    paddingHorizontal:padding*2
  }
});
