import {
    FlatList,
    Linking,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
  } from 'react-native';
  import React, {Fragment} from 'react';
  import {RootStackScreenProps} from '../../Navigations/types';
  import {useAssignment} from '../../hooks';
  import {BackgroundWrapper, Button, Loader} from '../../Components';
  import {Colors, Size} from '../../lib';
  import {ASSIGNMENT_DOWNLOAD_PATH} from '../../services';
  
  type classesProps = {
    id: number;
    batch_id: string;
    type: string;
    desc: string;
    file: string;
    addedby: string;
    created_at: string;
    updated_at: string;
  };
  
  const AssignmentScreen = ({
    navigation,
    route,
  }: RootStackScreenProps<'AssignmentScreen'>) => {
    const {width} = useWindowDimensions();
    const {batchId} = route.params;
    const [assignment] = useAssignment({batchID: batchId});
  
    if (assignment.isLoading) {
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
              Batches Assignment List
            </Text>
          </View>
  
          <View>
            <FlatList
              data={assignment.assignment}
              removeClippedSubviews={false} 
              keyExtractor={(item: classesProps) => item.id.toString()}
              scrollEnabled={false}
              ListEmptyComponent={() => {
                return (
                  <View>
                    <Text style={styles.textColor}>
                      You have no any Assignment
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
                          <Text style={styles.textColor}>{item.desc}</Text>
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
                            {item.file}
                          </Text>
                        </View>
  
                        <Button
                          title="Assignment"
                          onPress={() =>
                            Linking.openURL(
                              `${ASSIGNMENT_DOWNLOAD_PATH}${item.file}`,
                            )
                          }
                        />
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
  
  export default AssignmentScreen;
  
  const styles = StyleSheet.create({
    textColor: {
      color: Colors.default.dark,
    },
  });
  