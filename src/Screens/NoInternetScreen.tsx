import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type Props = {
  onRetry: () => void;
};
const NoInternetScreen = ({onRetry}: Props) => {
  return (
    // <img width="53" height="53" src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-No-Internet-internet-security-and-communication-vectorslab-flat-vectorslab.png" alt="external-No-Internet-internet-security-and-communication-vectorslab-flat-vectorslab"/>
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.icons8.com/external-vectorslab-flat-vectorslab/250/external-No-Internet-internet-security-and-communication-vectorslab-flat-vectorslab.png',
        }} // Replace with your custom icon or image
        style={styles.image}
      />
      <Text style={styles.title}>No Internet Connection</Text>
      <Text style={styles.message}>
        Please check your connection and try again.
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default NoInternetScreen;
