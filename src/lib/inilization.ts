import {Dimensions} from 'react-native';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();
export const isLargeScreen = Dimensions.get('window').width >= 768;
