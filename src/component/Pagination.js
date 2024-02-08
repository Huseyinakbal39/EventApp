import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Pagination = ({data}) => {
  return (
    <View style={styles.container}>
      {
        data.map((_,idx) =>{
          return <View key={idx.toString()} style={styles.dot}/>;
        })
      }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  dot:
  {
    width:12,
    height:12,
    borderRadius:6,
    marginHorizontal:3,
    backgroundColor:'#ccc'
  },
  container:
  {
    position:'absolute',
    flexDirection:'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:500,
  }
});