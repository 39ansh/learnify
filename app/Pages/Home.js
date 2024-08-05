import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { ScrollView } from 'react-native'
import SearchBar from './../../components/SearchBar';
import Slider from './../../components/Slider';
import CourseList from './../../components/CourseList';
import WelcomeHeader from './../../components/WelcomeHeader';
import VideoCourseList from './../../components/VideoCourseList';



export default function Home() {
    const {userData,setUserData}=useContext(AuthContext)
   
  return (
    <ScrollView style={{padding:20}}>
        <WelcomeHeader/>
        <SearchBar/>
        <Slider/>
        <VideoCourseList/>
        <CourseList type={'basic'} />
        <CourseList type={'advance'} />
        <View style={{height:100}}> 
          
        </View>
    </ScrollView> 
  )
}