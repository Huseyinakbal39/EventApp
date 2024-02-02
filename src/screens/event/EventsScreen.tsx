import { View, Text, ScrollView, FlatList, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, TextInput } from 'react-native-paper'
import { eventList } from '../../data/eventList'
import DatePicker from 'react-native-date-picker'
import dayjs from 'dayjs'
import 'dayjs/locale/tr'
import { black, red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'


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

  const searchByCategory = (name:string)=>
  {
    var name = name.trim()

    let filteredEvents = eventList.filter(item => item.category.toLocaleLowerCase().includes(name.toLocaleLowerCase()))

    setevent(filteredEvents)
  }

  const searchByDate = () => {

    let startDateWithFormat = dayjs(startDate).format("DD-MM-YYYY")
    let endDateWithFormat = dayjs(endDate).format("DD-MM-YYYY")

    let filteredEvents = eventList.filter(item => dayjs(item.date, "DD-MM-YYYY").isAfter(startDateWithFormat) && dayjs(item.date, "DD-MM-YYYY").isBefore(endDateWithFormat))

    setevent(filteredEvents)

  }

  return (<>
    <View style={styles.mainview}>
  
      <View style={styles.altview}>
        <Button onPress={() => setOpen(true)} mode="contained" style={{ marginBottom: '1%', marginLeft: 5 ,backgroundColor:'black'}}>
          Başlangıç Tarihi
        </Button>
        <Button onPress={() => setOpen2(true)} mode="contained" style={{ marginBottom: '1%', marginLeft: 5 ,backgroundColor:'black'}}>
          Bitiş Tarihi
        </Button>
      </View>
  
      
      <View >
        <Button style={styles.altbutton} onPress={() => searchByDate()} mode="contained">Filtrele</Button>
        <Button style={styles.altbutton} onPress={() => setevent(eventList)}><Text style={styles.altbuttontxt}>Filtre Temizle</Text></Button>
      </View>

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
      <Divider style={styles.divider} />
      <TextInput
        label="Search by name"
        onChangeText={text => searchByName(text)}
        style={styles.txtinput}
      />
  
      <Divider  style={styles.divider} />
          <FlatList
              contentContainerStyle={styles.contenContainer}
              data={event}
              renderItem={({ item }) => {
              item.date = dayjs(item.date, "DD-MM-YYYY").format('DD MMMM dddd HH:mm')
              return <>
                  <Pressable onPress={() => navigation.navigate("Etkinlik Detayları", {item: item}) }>
                      <Card key={item.id}>
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
  cardtitle:
  {
    fontWeight:'bold',
    color:'black',
    fontSize:25
  },
  divider:
  {
    marginBottom:'1%'
  },
  contenContainer:
  {
    paddingBottom:150
  },
  txtinput:
  { 
    marginBottom: '1%' ,
    backgroundColor: 'black'
   },
   mainview:
   { paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor:'black' 
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