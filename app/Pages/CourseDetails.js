import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import { AuthContext } from '../Context/AuthContext';
import courseData from '../../courseData.json';
import { CourseContent } from './../../components/CourseContent';

export default function CourseDetails() {
  const param = useRoute().params;
  const [course, setCourse] = useState({});
  const navigation = useNavigation();
  const [userProgress, setUserProgress] = useState([]);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    // Set the course data from JSON
    const courseDetails = courseData;
    setCourse(courseDetails);
    // Set the user progress from JSON
    setUserProgress(courseDetails.userProgress);
  }, []);

  return (
    <View style={{ padding: 20, paddingTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="white" />
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{course.title || course.name}</Text>
        <Text style={{ color: Colors.gray }}>By Team Learnify</Text>
        <Image
          source={{ uri: course.image }}
          style={{ height: 150, marginTop: 10, borderRadius: 10 }}
        />
        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>About Course</Text>
        <Text numberOfLines={4} style={{ color: Colors.gray }}>{course.description}</Text>
      </View>
      <CourseContent
        course={course}
        userProgress={userProgress}
        courseType={param.courseType}
      />
    </View>
  );
}
