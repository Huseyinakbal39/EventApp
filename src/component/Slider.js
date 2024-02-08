import { View, Text ,StyleSheet,FlatList} from 'react-native';
import {eventList} from '../data/eventList';
import React, { useState } from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';


const Slider = () => {

  const [event,setevent] = useState(eventList)
  
  const filterConcerts = () => 
  {
    let filteredEvents = eventList.filter(item => item.category.toLocaleLowerCase().includes("konser"))


    setevent(filteredEvents)
  }


  return (
    <View>
      <FlatList
       data = {event}
       renderItem={({item})=> <SlideItem item={item}/>}
       horizontal
       pagingEnabled
       snapToAlignment='center'
       showsHorizontalScrollIndicator={false}
       />
       <Pagination data={event}/>
    </View>
  );
};

export default Slider