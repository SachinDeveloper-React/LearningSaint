import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  imageUrl: string;
  title: string;
  date: string;
  onPress: () => void;
};
const ArticleCard = ({imageUrl, title, date, onPress}: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <View style={styles.footer}>
          <Text style={styles.date}>{date}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 15,
    height: 120,
    justifyContent:"space-between"
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E2E2E',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  readMore: {
    fontSize: 16,
    color: '#FF914D',
    fontWeight: 'bold',
  },
});

export default ArticleCard;
