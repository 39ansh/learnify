import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../app/Shared/Colors";

 export function CourseContent({ course, userProgress, courseType }) {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("userProgress", userProgress);
  }, [userProgress]);

  const checkUserProgress = (contentId) => {
    return userProgress?.find(item => item.courseContentId == contentId);
  };

  const onChapterPress = (courseContent) => {
    if (courseType === 'text') {
      navigation.navigate('course-chapter', {
        courseContent: courseContent,
        courseId: course.id,
      });
    } else {
      navigation.navigate('play-video', {
        courseContent: courseContent,
        courseId: course.id,
      });
    }
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Course Content</Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={course?.VideoTopic || course?.Topic}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => onChapterPress(item)} style={{ display: 'flex', flexDirection: 'row', backgroundColor: Colors.white, marginBottom: 5, padding: 13, alignItems: 'center', borderRadius: 5 }}>
            { checkUserProgress(item.id) ? <Ionicons name="checkmark-circle" size={24} color={Colors.green} style={{ marginRight: 20 }} /> : <Text style={{ fontWeight: 'bold', fontSize: 20, color: Colors.gray, marginRight: 20 }}>{index + 1}</Text> }
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.Topic || item.name}</Text>
            <Ionicons name="play-circle" size={24} style={{ position: 'absolute', right: 10 }} color={Colors.primary} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}