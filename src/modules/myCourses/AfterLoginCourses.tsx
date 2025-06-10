import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View,
  } from 'react-native';
  import React, {Dispatch, SetStateAction, useState} from 'react';
  import {Colors} from '../../lib';
  import {useNavigation} from '@react-navigation/native';
  import {ExpandableItem} from '../../Components';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  type Props = {
    batches: {
      id: number;
      batch_id: string;
      student_id: string;
      status: string;
      created_at: string;
      updated_at: string;
    }[];
  };
  
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  
  const BatchesResourses = ({
    data,
    onPress,
  }: {
    data: {id: string; title: string; navigate: string}[];
    onPress: (navigate: string) => void;
  }) => {
    return (
      <View>
        <FlatList
        removeClippedSubviews={false} 
          data={data}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({index, item}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.flex_between,
                  {
                    height: 24,
                  },
                ]}
                onPress={() => onPress(item.navigate)}>
                <View>
                  <Text>{item.title}</Text>
                </View>
                <View>
                  <Ionicons name={'chevron-forward'} size={24} color="#333" />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  
  const AfterLoginCourses = (props: Props) => {
    const {batches} = props;
    const {navigate} = useNavigation();
    const [dynamicHeight, setDynamicHeight] = useState<any>(24);
  
    const data = [
      {id: '1', title: 'View Classes', navigate: 'ClassesScreen'},
      {id: '2', title: 'View Recording', navigate: 'RecordingScreen'},
      {id: '3', title: 'View Assignment/Notes', navigate: 'AssignmentScreen'},
      {id: '4', title: 'View Ebooks', navigate: 'EbookScreen'},
    ];
  
    return (
      <View>
        <FlatList
          data={batches}
          removeClippedSubviews={false} 
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <ExpandableItem
              dynamicHeight={(dynamicHeight + 20) * data.length}
              title={item.batch_id}
              id={index}
              content={
                <BatchesResourses
                  data={data}
                  onPress={items => {
                    const navigationNames: {
                      ClassesScreen: string;
                      RecordingScreen: string;
                      AssignmentScreen: string;
                      EbookScreen: string;
                    } = {
                      ClassesScreen: 'ClassesScreen',
                      RecordingScreen: 'RecordingScreen',
                      AssignmentScreen: 'AssignmentScreen',
                      EbookScreen: 'EbookScreen',
                    };
  
                    navigate(
                      navigationNames[items as keyof typeof navigationNames],
                      {
                        batchId: item.batch_id,
                      },
                    );
                  }}
                />
              }
              onPressClassHandler={() => {
                navigate('ClassesScreen', {
                  batchId: item.batch_id,
                });
              }}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  };
  
  export default AfterLoginCourses;
  
  const styles = StyleSheet.create({
    textColor: {
      color: Colors.default.dark,
    },
    listContainer: {
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    flex_between: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
  });
  