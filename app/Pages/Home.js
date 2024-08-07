import { View, ScrollView, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import SearchBar from './../../components/SearchBar';
import Slider from './../../components/Slider';
import WelcomeHeader from './../../components/WelcomeHeader';
import data from '../../data.json'; 
import VideoCourseList from './../../components/VideoCourseList';
import { CourseList } from './../../components/CourseList';

export default function Home() {
  const { userData } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <WelcomeHeader />
      <SearchBar />
      <Slider />
      <VideoCourseList videoList={data.videoCourses} />
      <CourseList type='basic' courseList={data.basicCourses} />
      <CourseList type='advance' courseList={data.advanceCourses} />
      <View style={styles.footerSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  footerSpace: {
    height: 100,
  },
});
