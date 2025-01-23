import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { font, size } from '../config/GlobalSetting'
import { router } from 'expo-router'

const { padding, height, width } = size
const IELTSItem = ({item, id}) => {
  return (
    <TouchableOpacity onPress={()=>{
        router.push({
            pathname:'ielts',
            params:{id}
        })
    }} style={[styles.content]}>
      <Text style={[styles.title]}>{id+1}. {item["word"]}</Text>
    </TouchableOpacity>
  )
}

export default IELTSItem

const styles = StyleSheet.create({
    content:{
        height:height/12,
        padding,
        backgroundColor:'white',
        marginVertical:padding,
        borderRadius:padding
       

    },
    title:{
        fontSize:font['largeFont'],
        
    }

})