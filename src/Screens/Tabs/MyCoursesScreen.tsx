import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackgroundWrapper, Loader} from '../../Components';
import {AfterLoginCourses, BeforeLogin} from '../../modules';

import {useBatches} from '../../hooks';
import {useMMKVBoolean, useMMKVString} from 'react-native-mmkv';
import {Colors} from '../../lib';

type Props = {};

const MyCoursesScreen = (props: Props) => {
  const [login, setLogin] = useMMKVBoolean('@login');

  const [batches] = useBatches({});

  if (batches.isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      {login ? (
        <View>
          {batches.batches.length !== 0 ? (
            <AfterLoginCourses batches={batches.batches} />
          ) : (
            <>
              <BeforeLogin skip={false} />
            </>
          )}
        </View>
      ) : (
        <BeforeLogin skip={true} />
      )}
    </ScrollView>
  );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default.light,
  },
});
