import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

type Props = {
  img?: string;
};

const UserImage = (props: Props) => {
  const {img = 'https://img.icons8.com/material-rounded/96/user.png'} = props;
  const {scale} = useWindowDimensions();
  return (
    <View>
      <View style={styles.imageContainer} shouldRasterizeIOS>
        <Image
          source={{
            scale: scale,
            cache: 'force-cache',
            uri: img,
          }}
          width={100}
          height={100}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default UserImage;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 'auto',
    borderRadius: 100,
    overflow: 'hidden',
  },
});
