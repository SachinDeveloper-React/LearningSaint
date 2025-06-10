import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeDataValue = async (key : string , value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  export const storeDataObject = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };