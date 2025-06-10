import React, {useState, useCallback, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Button, BackHandler} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation-locker';

const YouTubeVideo = ({navigation}) => {
  const [playing, setPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const enterFullScreen = () => {
    Orientation.lockToLandscape();
    setIsFullScreen(true);
  };

  const exitFullScreen = () => {
    Orientation.lockToPortrait();
    setIsFullScreen(false);
  };

  const handleBackPress = useCallback(() => {
    if (isFullScreen) {
      exitFullScreen();
      return true; // Prevent the default back action in full-screen mode
    }
    return false; // Allow default back action in portrait mode
  }, [isFullScreen]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => backHandler.remove(); // Clean up on unmount
  }, [handleBackPress]);

  const handleFullScreenChange = useCallback(() => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  }, [isFullScreen]);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={isFullScreen ? Dimensions.get('window').width : 300}
        width={
          isFullScreen
            ? Dimensions.get('window').height
            : Dimensions.get('window').width
        }
        play={playing}
        videoId="dQw4w9WgXcQ" // Replace with your video ID
        initialPlayerParams={{
          fullscreen: true,
          controls: 1,
        }}
      />
      <View style={styles.controls}>
        {!isFullScreen && (
          <Button title={playing ? 'Pause' : 'Play'} onPress={togglePlaying} />
        )}
        <Button
          title={isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
          onPress={handleFullScreenChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  controls: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default YouTubeVideo;
