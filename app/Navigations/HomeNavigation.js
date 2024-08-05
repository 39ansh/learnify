import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayVideo from '../Pages/PlayVideo';
import CourseDetails from './../Pages/CourseDetails';
import CourseChapter from './../Pages/CourseChapter';
import Home from './../Pages/Home';

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={Home} ></Stack.Screen>
        <Stack.Screen name="course-detail" component={CourseDetails} ></Stack.Screen>
        <Stack.Screen name="course-chapter"
        component={CourseChapter}/>
         <Stack.Screen name="play-video"
        component={PlayVideo}/>
    </Stack.Navigator>
  )
}