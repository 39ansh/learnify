import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../app/Shared/GlobalApi'
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function VideoCourseList({ videoList }) {
    const navigation = useNavigation();
  
    const onPressCourse = (course) => {
      navigation.navigate('course-detail', {
        courseData: course,
        courseType: 'video',
      });
    };
  
    return (
      <View style={{ marginTop: 15 }}>
        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Video Course</Text>
        <FlatList
          data={videoList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressCourse(item)}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 210, height: 120, marginRight: 10, borderRadius: 7 }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
  