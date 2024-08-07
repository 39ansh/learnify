import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';

// Example JSON data
const videoData = {
  "id": 1,
  "title": "React Native Basics",
  "description": "Learn the basics of React Native.",
  "image": "https://img.freepik.com/free-vector/setup-wizard-concept-illustration_114360-1431.jpg?t=st=1723018434~exp=1723022034~hmac=a54c6cfba0333f786a37544a9a0cd725d271197be7670e143036cdd3fbb747ec&w=740",
  "VideoTopic": [
    {
      "id": 1,
      "name": "Introduction",
      "Topic": "Introduction to the course",
      "videoUrl": "https://youtu.be/ZBCUegTZF7M" // Use video ID part
    },
    {
      "id": 2,
      "name": "Setup",
      "Topic": "Setting up the environment",
      "videoUrl": "https://youtu.be/ZBCUegTZF7M" // Use video ID part
    },
    {
      "id": 3,
      "name": "Components",
      "Topic": "Understanding components",
      "videoUrl": "https://youtu.be/ZBCUegTZF7M" // Use video ID part
    }
  ]
};

function extractVideoId(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/) ||
                url.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/);
  console.log("Extracted Video ID:", match ? match[1] : null); // Debug log
  return match ? match[1] : null;
}

export default function PlayVideo() {
  const navigation = useNavigation();
  const route = useRoute();
  const { videoId } = route.params;

  const [videoChapter, setVideoChapter] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const selectedVideo = videoData.VideoTopic.find(item => item.id === videoId);
    if (selectedVideo) {
      const videoId = extractVideoId(selectedVideo.videoUrl);
      console.log("Selected Video Data:", { ...selectedVideo, videoId }); // Debug log
      setVideoChapter({
        ...selectedVideo,
        videoId,
      });
    }
  }, [videoId]);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      {videoChapter ? (
        <View>
          <Text style={styles.title}>{videoChapter.name}</Text>
          <YoutubePlayer
            height={220}
            play={playing}
            videoId={videoChapter.videoId}
            onChangeState={onStateChange}
          />
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{videoChapter.Topic}</Text>
        </View>
      ) : (
        <Text>No video selected</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 25,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    lineHeight: 20,
  },
});
