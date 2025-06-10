import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Button} from '../../Components';
import {Colors, Size} from '../../lib';

const items = [
  {
    label: '#Crash on Launch',
    users: '',
    description:
      'The app crashes immediately after launching, preventing the user from accessing the app. This issue may be related to dependencies or incorrect initialization in the main application file.',
    active: false,
  },
  {
    label: '#UI Overlaps in Portrait Mode',
    users: '',
    description:
      'Some UI elements overlap or get cut off when the device is rotated to landscape mode. This typically occurs due to incorrect handling of layout constraints or missing responsive design adjustments.',
    active: false,
  },
  {
    label: '#Slow Initial Load',
    users: '',
    description:
      'The app takes a long time to load the initial screen, causing a poor user experience. This might be related to large bundle sizes, heavy API calls, or unoptimized images',
    active: false,
  },
  {
    label: '#Inconsistent Font Sizes',
    users: '',
    description:
      'Font sizes appear inconsistent across different screens or devices, leading to a jarring visual experience. This may be due to improper scaling or missing dynamic font size adjustments.',
    active: false,
  },
  {
    label: '#Button Click Delay',
    users: '',
    description:
      'Theres a noticeable delay between tapping a button and the corresponding action being executed. This may be caused by heavy processing on the main thread or issues with the touch event handling.',
    active: false,
  },
  {
    label: '#Text Input Lag',
    users: '',
    description:
      'Typing into text inputs is slow and lags behind user input. This can be due to unoptimized state updates or heavy computations in the input component.',
    active: false,
  },
  {
    label: '#Images Not Loading',
    users: '',
    description:
      'Images fail to load or appear as broken links on certain screens. This could be related to incorrect image paths, network issues, or problems with the image caching library.',
    active: false,
  },
  {
    label: '#Navigation Header Disappears',
    users: '',
    description:
      ' The navigation header randomly disappears when navigating between certain screens. This might be caused by incorrect screen configuration or bugs in the navigation library.',
    active: false,
  },
];

export default function BugReportScreen() {
  const [value, setValue] = useState(items);
  const [onRefresh, setOnRefresh] = useState(false);
  const [disable, setDisable] = useState(true);
  const toggleActive = (index: number) => {
    // Create a new array with the modified item
    const newItems = value.map((item, i) => {
      if (i === index) {
        return {...item, active: !item.active};
      }
      return item;
    });

    // Update the state
    setValue(newItems);
  };

  useEffect(() => {
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      if (element.active === true) {
        setDisable(false);
        break;
      } else {
        setDisable(true);
      }
    }
  }, [value, onRefresh]);
  return (
    <View style={styles.container}>
      <FlatList
        data={value}
        removeClippedSubviews={false} 
        keyExtractor={(_, id) => id.toString()}
        showsVerticalScrollIndicator={false}
        stickyHeaderHiddenOnScroll
        ListHeaderComponent={() => {
          return <Text style={styles.title}>Bugs</Text>;
        }}
        refreshing={onRefresh}
        onRefresh={() => {
          setOnRefresh(true);
          setTimeout(() => {
            setOnRefresh(false);
          }, 2000);
        }}
        renderItem={({index, item, separators}) => {
          const {label, users, description, active} = item;
          return (
            <TouchableOpacity
              activeOpacity={0.95}
              key={index}
              onPress={() => toggleActive(index)}>
              <View style={[styles.radio, active && styles.radioActive]}>
                <View style={styles.radioTop}>
                  <Text style={styles.radioLabel}>{label}</Text>

                  {/* <Text style={styles.radioUsers}>
                    <Text style={{fontWeight: '700'}}>{users}</Text> users
                  </Text> */}
                </View>

                <Text style={styles.radioDescription}>{description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        disabled={disable}
        title="Submit"
        onPress={() => true}
        style={{padding: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.default.light,
    padding: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  /** Radio */
  radio: {
    position: 'relative',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 6,
    alignItems: 'flex-start',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  radioActive: {
    borderColor: '#0069fe',
  },
  radioTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  radioLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  radioUsers: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2f2f2f',
  },
  radioDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#848a96',
  },
});
