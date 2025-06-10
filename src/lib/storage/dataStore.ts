import {storage} from '../inilization';

type DataSetStorageType = {
  key: string;
  value: string | number | boolean;
};
type DataGetStorageType = {
  key: string;
};
export const setDataStorage = ({key, value}: DataSetStorageType) => {
  try {
    storage.set(key, value);
    return true;
  } catch (err) {
    return false;
  }
};
export const getDataStorage = (key: string) => {
  try {
    const value = storage.getString(key);
    return value;
  } catch (err) {
    return false;
  }
};
export const getAllKeysDataStorage = () => {
  try {
    const keys = storage.getAllKeys();
    return keys;
  } catch (err) {
    return false;
  }
};
export const deleteSpecificDataStorage = (key: string) => {
  try {
    storage.delete(key);
    return true;
  } catch (err) {
    return false;
  }
};
export const deleteAllDataStorage = () => {
  try {
    storage.clearAll();
    return true;
  } catch (err) {
    return false;
  }
};
