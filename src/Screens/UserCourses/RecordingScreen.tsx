import {
  FlatList,
  Linking,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {Fragment, useCallback} from 'react';
import {RootStackScreenProps} from '../../Navigations/types';
import {useRecording} from '../../hooks';
import {BackgroundWrapper, Button, Loader} from '../../Components';
import {Colors, Size} from '../../lib';

type classesProps = {
  id: number;
  batch_id: string;
  class_id: string;
  desc: string;
  link: string;
  created_at: string;
  updated_at: string;
};

type OpenURLButtonProps = {
  url: string;
  children: string;
  disabled: boolean;
};

const OpenURLButton = ({url, children, disabled}: OpenURLButtonProps) => {
  const handlePress = useCallback(
    async (uri: string) => {
      const findmeetingId = uri.split('drive')[1];
      const googleDriveAppUrl = `googledrive://drive.google.com/drive/${findmeetingId}`;
      const googleDriveWebUrl = uri;

      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(googleDriveAppUrl);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(googleDriveAppUrl);
      } else {
        // Alert.alert(`Don't know how to open this URL: ${url}`);
        await Linking.openURL(googleDriveWebUrl);
      }
    },
    [url],
  );

  return (
    <Button
      title={children}
      disabled={disabled}
      onPress={() => handlePress(url)}
      style={{
        padding: 2,
      }}
    />
  );
};

const RecordingScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'RecordingScreen'>) => {
  const {width} = useWindowDimensions();
  const {batchId} = route.params;
  const [recording] = useRecording({batchID: batchId});

  if (recording.isLoading) {
    return <Loader />;
  }

  return (
    <BackgroundWrapper>
      <View
        style={{
          width: width * 0.9,
          margin: 'auto',
          marginVertical: 10,
        }}>
        <View>
          <Text
            style={[
              styles.textColor,
              {
                fontSize: Size.fontSize.llg_24,
                fontWeight: '700',
                marginBottom: 10,
              },
            ]}>
            Batches Recording List
          </Text>
        </View>

        <View>
          <FlatList
            data={recording.recording}
            removeClippedSubviews={false}
            keyExtractor={(item: classesProps) => item.id.toString()}
            scrollEnabled={false}
            ListEmptyComponent={() => {
              return (
                <View>
                  <Text style={styles.textColor}>
                    You have no any Recording
                  </Text>
                </View>
              );
            }}
            renderItem={({item, index}) => {
              return (
                <Fragment key={index}>
                  <View
                    style={{
                      flexDirection: 'column',
                      gap: 10,
                      borderBottomWidth: 1,
                      paddingVertical: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.textColor}>{index + 1}.</Text>
                        <Text style={styles.textColor}>{item.batch_id}</Text>
                      </View>
                      <View>
                        <Text style={styles.textColor}>
                          {item.created_at.split('T')[0]}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <View>
                        <Text
                          adjustsFontSizeToFit
                          numberOfLines={2}
                          style={[
                            styles.textColor,
                            {
                              flex: 1,
                              width: width * 0.4,
                            },
                          ]}>
                          {item.desc}
                        </Text>
                      </View>

                      {/* <Button title="Start Class" onPress={() => true} /> */}
                      <OpenURLButton
                        url={item.link}
                        disabled={
                          [undefined, null, 'NA'].includes(item.link)
                            ? true
                            : false
                        }>
                        Open Recording
                      </OpenURLButton>
                    </View>
                  </View>
                </Fragment>
              );
            }}
          />
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default RecordingScreen;

const styles = StyleSheet.create({
  textColor: {
    color: Colors.default.dark,
  },
});
