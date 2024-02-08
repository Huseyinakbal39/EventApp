import { View, Text, ScrollView, FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, TextInput } from 'react-native-paper'
import {eventList} from './../data/eventList'

const City = () => {
  const [event,setevent] = useState(eventList);
  
  const [visible, setVisible] = useState(false);
  const filterIstanbul = () => 
  {
    let filteredEvents = eventList.filter(item => item.city.toLocaleLowerCase().includes("Istanbul"))


    setevent(filteredEvents)
  }


  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <View
            style={{
              width: '80%',
              height: 200,
              borderRadius: 10,
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                filterIstanbul();
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>İstanbul</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                filterTheatre();
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                Mekan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                filterStands();
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>
                Şehir
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
              }}
              onPress={() => {
                
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}> Tarih</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                height: 50,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                paddingLeft: 20,
                backgroundColor:'white'
              }}
              onPress={() => {
                setevent(eventList);
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}> Filtre Temizle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default City