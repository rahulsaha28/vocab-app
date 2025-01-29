import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'


import { colors, font, size } from '../config/GlobalSetting';
import { useWritingStore } from '../store/useWritingStore';

const { padding } = size
const ielts = () => {
    const { id } = useLocalSearchParams();
    const {  IELTSItem, setIELTSItem } = useWritingStore(state=>state);
    useEffect(()=>{
        setIELTSItem(id);
    },[id])
  return (
    <View>
      <View style={[styles.titleContainer]}>
        {
          IELTSItem['replace'] && <Text style={[styles.title]}>{IELTSItem['replace']}</Text>
        }
      
      </View>
      <View style={[{ padding:padding }]}>
        {
            // IELTSItem['sentence'] && IELTSItem['sentence'].split(';').map((item,index)=>(
            //     <View key={index} style={[styles.sentenceContainer]}>
            //         <Text style={[styles.text]}>{item}</Text>
            //     </View>
            // ))
            IELTSItem['sentence'] && <FlatList 
              keyExtractor={(item, index)=>index+item}
              data={IELTSItem['sentence'].split(';')}
              contentContainerStyle={{ paddingBottom:padding*10 }}
              showsVerticalScrollIndicator={false}

              renderItem={({item, index})=>(
                <View key={index} style={[styles.sentenceContainer]}>
                  
                    <Text style={[styles.text]}>{item}</Text>
                </View>
              )}
            />
        }
      </View>
     
    </View>
  )
}

export default ielts

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
  },
  sentenceContainer:{
    backgroundColor:'white',
    borderRadius:padding,
    padding:padding,
    margin:padding
  },
  text:{
    fontSize:font['largeFont']
  }
})