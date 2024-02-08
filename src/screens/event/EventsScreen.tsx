import { View, Text, ScrollView,Image, FlatList, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, TextInput } from 'react-native-paper'
import { eventList } from '../../data/eventList'
import DatePicker from 'react-native-date-picker'
import dayjs from 'dayjs'
import 'dayjs/locale/tr'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Modal } from 'react-native'
import City from './../../component/City'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Slider from '../../component/Slider'
import SlideItem from './../../component/SlideItem';

const EventsScreen = ({ navigation }: any) => {

  dayjs.locale('tr')

  const [event,setevent] = useState(eventList)  

  const [startDate, setStartDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const [endDate, setendDate] = useState(new Date())
  const [open2, setOpen2] = useState(false)

  const searchByName = (name: string) => 
  {
    var name = name.trim()

    let filteredEvents = eventList.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))

    setevent(filteredEvents)
  }

  const [visible, setVisible] = useState(false);

  const searchByCategory = (name:string)=>
  {
    var name = name.trim()

    let filteredEvents = eventList.filter(item => item.category.toLocaleLowerCase().includes(name.toLocaleLowerCase()))

    setevent(filteredEvents)
  }

  const searchByDate = () => {

    let startDateWithFormat = dayjs(startDate).format("DD-MM-YYYY")
    let endDateWithFormat = dayjs(endDate).format("DD-MM-YYYY")

    let filteredEvents = eventList.filter(item => dayjs(item.date, "DD-MM-YYYY").isAfter(startDateWithFormat) &&
     dayjs(item.date, "DD-MM-YYYY").isBefore(endDateWithFormat))

    setevent(filteredEvents)
  }

  const filterConcerts = () => 
  {
    let filteredEvents = eventList.filter(item => item.category.toLocaleLowerCase().includes("konser"))


    setevent(filteredEvents)
  }

  const filterStands = () => 
  {
    let filteredEvents = eventList.filter(item => item.category.toLocaleLowerCase().includes("stand-up"))
    setevent(filteredEvents)
  }

  const filterTheatre = () => 
  {
    let filteredEvents = eventList.filter(item => item.category.toLocaleLowerCase().includes("tiyatro"))

    setevent(filteredEvents)
  }

  return (<>
    <View style={styles.mainview}>
      <View style={styles.altview}>
        <MaterialIcons name="search" style={{color:'black',fontSize:40}} />
        <Divider style={styles.divider} />
          <TextInput
          label="Sanatçı, Sanatçı Grubu veya Etkinlik Ara" 
            onChangeText={text => searchByName(text)}
            style={styles.txtinput}
          />
        <View>
          <TouchableOpacity
          style={{marginRight:15}}
          onPress={() =>
          {
            setVisible(true);
          }}>
            <Ionicons name="filter-circle-outline" style={{color:'black',fontSize:40}} />
            
          </TouchableOpacity>
        </View>
      </View>

      <Divider  style={styles.divider} />
      <View style={styles.contenContainer}>
        <Text></Text>
        <Text></Text>

        <Text></Text>
        <Text></Text>
        <FlatList
              contentContainerStyle={styles.contenContainer}
              data={event}
              renderItem={({ item }) => { 
              item.date = dayjs(item.date, "DD-MM-YYYY").format('DD MMMM dddd HH:mm')
              return <>
                  <Pressable onPress={() => navigation.navigate("Etkinlik Detayları", {item: item}) }>
                      <Card style={styles.card} key={item.id}>
                          <Card.Cover source={{ uri: item.image }} />
                          <Card.Title titleStyle={styles.cardtitle} title={item.name} subtitleStyle={styles.cardsubtitle} subtitle={item.date} />
                      </Card>
                  </Pressable>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
              </>
              }
              }
          />
      </View>

      <Text></Text>
      <Text></Text>
      <Text></Text>


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
                filterConcerts();
                setVisible(false);
              }}>
              <Text style={{fontSize: 18, color: '#000'}}>Kategori</Text>
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
                <City/>
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
      
      <DatePicker
        modal
        open={open}
        date={startDate}
        onConfirm={(date) => {
          setOpen(false)
          setStartDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        mode="date"
      />

      <DatePicker
        modal
        open={open2}
        date={endDate}
        onConfirm={(date) => {
          setOpen2(false)
          setendDate(date)
        }}
        onCancel={() => {
          setOpen2(false)
        }}
        mode="date"
      />
    
          
    </View>
  </>)
}


const styles = StyleSheet.create({
  cardparagraph:{
    color:'#778899',
    margin:24,
    fontSize:20,
    fontWeight:'bold',
  },
  cardsubtitle:
  {
    fontWeight:'bold',
    color:'black',
    fontSize:15
  },
  card:
  {
    backgroundColor:'lightsteelblue'
  },
  cardtitle:
  {
    fontWeight:'bold',
    color:'black',
    fontSize:25
  },
  divider:
  {
    backgroundColor: 'gainsboro ',
    marginBottom:'1%'
  },
  contenContainer:
  {
    paddingBottom:170
  },
  txtinput:
  { 
    marginBottom: '1%' ,
    backgroundColor: 'gainsboro ',
    width: '80%'
   },
   mainview:
   { paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor:'white' 
  },
  altview:
  { display: 'flex', 
  justifyContent: 'space-between',
   flexDirection: 'row',
    alignItems: 'center' 
  },
  altbutton:
  {
    backgroundColor:'black'
  },
  altbuttontxt:
  {
    color:'white'
  }
})

export default EventsScreen