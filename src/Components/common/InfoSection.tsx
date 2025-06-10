import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

type Props = {
  icon: any;
  title: string;
  description: string;
  byUrlImage?: boolean;
};
const InfoSection = ({icon, title, description, byUrlImage = false}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {byUrlImage ? (
          <Image
            source={{
              uri: icon,
            }}
            resizeMode="contain"
            style={styles.icon}
          />
        ) : (
          <Image
            source={icon}
            style={[
              styles.icon,
              {
                tintColor: '#fff',
              },
            ]}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    // paddingHorizontal: 10,
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7941D', // Orange background for the icon
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  icon: {
    width: 30,
    height: 30,
    // tintColor: '#fff', // White icon color
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default InfoSection;
