import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { usePhraseStore } from '../store/usePhraseStore';
import WRItem from '../components/WRItem';
import { colors, font, size } from '../config/GlobalSetting';

const { padding } = size
const phrase = () => {
    const { id } = useLocalSearchParams();
    const { phraseIT, setPhraseIT } = usePhraseStore(state=>state);
    useEffect(()=>{
        setPhraseIT(id);
    },[id])
  return (
    <View>
      <View style={[styles.titleContainer]}>
      <Text style={[styles.title]}>{phraseIT['word']}</Text>
      </View>
      
      {
       phraseIT["correct"] && phraseIT["incorrect"].map((item,index)=>(<WRItem key={index} incorrect={item} correct={phraseIT["correct"][index]} />))
      }
    </View>
  )
}

export default phrase

const styles = StyleSheet.create({
  title:{
    textAlign:'center',
    fontSize:font["largeFont"],
    padding,
    width:'50%',
    backgroundColor:colors['yellow'],
    borderRadius:padding
  },
  titleContainer:{
    alignItems:'center'
  }
})