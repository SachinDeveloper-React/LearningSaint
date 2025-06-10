import AsyncStorage from "@react-native-async-storage/async-storage";

export const getDataValue = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored
        return value
      } else {
        return null;
      }
    } catch (e) {
      // error reading value
    }
  };

 export const getDataObject = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };