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
  import {useClasses} from '../../hooks';
  import {BackgroundWrapper, Button, Loader} from '../../Components';
  import {Colors, Size} from '../../lib';
  
  type classesProps = {
    id: number;
    batch_id: string;
    link: string;
    trainer_id: string;
    date: string;
    starttime: string;
    endtime: string;
    created_at: string;
    updated_at: string;
  };
  
  type OpenURLButtonProps = {
    url: string;
    children: string;
    disabled: boolean;
  };
  
  const OpenURLButton = ({url, children, disabled}: OpenURLButtonProps) => {
    const findmeetingId = url.split('j/')[1];
  
    const zoomAppUrl = `zoomus://zoom.us/join?confno=${findmeetingId}`; // Zoom app URL scheme for specific meeting
    const zoomWebUrl = `https://zoom.us/j/${findmeetingId}`; // Zoom web URL for specific meeting
  
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(zoomAppUrl);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(zoomAppUrl);
      } else {
        // Alert.alert(`Don't know how to open this URL: ${url}`);
        await Linking.openURL(zoomWebUrl);
      }
    }, [url]);
  
    return (
      <Button
        title={children}
        disabled={disabled}
        onPress={handlePress}
        style={{
          padding: 4,
        }}
      />
    );
  };
  
  const ClassesScreen = ({
    navigation,
    route,
  }: RootStackScreenProps<'ClassesScreen'>) => {
    const {width} = useWindowDimensions();
    const {batchId} = route.params;
    const [classes] = useClasses({batchID: batchId});
  
    if (classes.isLoading) {
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
              Batches Classes List
            </Text>
          </View>
  
          <View>
            <FlatList
              data={classes.classes}
              removeClippedSubviews={false} 
              keyExtractor={(item: classesProps) => item.id.toString()}
              scrollEnabled={false}
              ListEmptyComponent={() => {
                return (
                  <View>
                    <Text style={styles.textColor}>You have no any Classes</Text>
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
                          <Text style={styles.textColor}>{item.date}</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View>
                          <Text style={styles.textColor}>
                            Start Time: {item.starttime}
                          </Text>
                          <Text style={styles.textColor}>
                            End Time: {item.endtime}
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
                          Open Zoom Meeting
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
  
  export default ClassesScreen;
  
  const styles = StyleSheet.create({
    textColor: {
      color: Colors.default.dark,
    },
  });
  