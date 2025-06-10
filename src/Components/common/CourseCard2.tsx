import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../lib';

type Props = {
  imageUrl: string;
  duration: string;
  mode: string;
  title: string;
  rating: number;
  price: number;
  onPress: () => void;
};
const CourseCard2 = ({
  imageUrl,
  duration,
  mode,
  title,
  rating,
  price,
  onPress,
}: Props) => {
  return (
    <View style={styles.cardShadow}>
      <View style={styles.card}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.detailsRow}>
            <Text style={styles.detailText}>{duration}</Text>
            <Text style={styles.detailText}>• {mode}</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ratingRow}>
            <View style={styles.stars}>
              {Array.from({length: 5}).map((_, index) => (
                <FontAwesome
                  key={index}
                  name={index < Math.floor(rating) ? 'star' : 'star-o'}
                  size={16}
                  color="#FFD700"
                />
              ))}
            </View>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <TouchableOpacity onPress={onPress} style={styles.priceButton}>
            <Text style={styles.priceText}>₹ {price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    backgroundColor: Colors.default.light,
    marginBottom: 20,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  card: {
    backgroundColor: Colors.default.light,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 15,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#707070',
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E2E2E',
    marginBottom: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#707070',
  },
  priceButton: {
    backgroundColor: '#FF914D',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  priceText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CourseCard2;
