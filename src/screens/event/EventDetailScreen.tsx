import { View, Text, Linking, Share, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const EventDetailScreen = ({ route }: any) => {

    const { item } = route.params
    return (<>
    <View style={{borderColor: 'black'}}>
        <Card key={item.id}>
            <Card.Cover source={{ uri: item.image }} />
            <Text style={styles.text}>{item.category}</Text>
            <Card.Title titleStyle={styles.title} title={item.name} subtitleStyle={styles.subtitle} subtitle={item.date} />
            <Card.Content>
                <Text style={styles.paragraph}>{item.description}</Text>
                <Text style={styles.text}>{item.place}</Text>
                <Text style={styles.text}>{item.city}</Text>
            </Card.Content>
        </Card>
    </View>
        
    </>)
}

const styles = StyleSheet.create({
    paragraph:{
      color:'#778899',
      margin:24,
      fontSize:20,
      fontWeight:'bold',
    },
    subtitle:
  {
    fontWeight:'bold',
    color:'black',
    fontSize:15
  },
  title:
  {
    fontWeight:'bold',
    color:'black',
    fontSize:25
  },
  text:
  {
    color:'#b0c4de',
    fontSize:20,
    fontWeight:'bold',
  }
  })

export default EventDetailScreen