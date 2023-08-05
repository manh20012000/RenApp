import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import styles from './StyleBranch.js'
import DataOjs from '../../DataObj.js'
import FlatItem from '../Omg/FlatItem.js'
 const Breach=()=>{
  return (
    <View style={styles.container}>
        <FlatList
             data={DataOjs}
             renderItem={({item,index})=>{
                return (
                       <FlatItem item={item} index={index}>

                       </FlatItem>
                )
             }}
        >
            


        </FlatList>
    </View>
  )
}
export default Breach;
