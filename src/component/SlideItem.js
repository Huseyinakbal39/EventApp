import { View, Text,Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { Button, Card, Divider, TextInput } from 'react-native-paper'
import { eventList } from '../data/eventList';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  return (
    <View style={styles.container}>
        <Image source={{ uri: item.image}}
        style={{width:300,height:200}} resizeMode='contain' />
    </View>
  );
};

export default SlideItem

const styles = StyleSheet.create({

    imagen:
    {
        flex:0.6,
        width: '100%',
        height: 200,
    },
    title:
    {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle:
    {
        width:'200%',
        fontSize: 18,
        color: '#333',
        marginVertical:12
    },
    cardcover:
    {
        paddingRight:'15%',
        width:'115%',
        height:'80%',
    },
    card:
    {

        backgroundColor:'lightsteelblue'
    },
    container:
    {
        width, 
        height,
        alignItems:'center'
    },
})