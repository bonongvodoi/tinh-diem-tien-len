import {AsyncStorage} from "react-native";

// asyncStorage
export const getItem = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const setItem = async (key: string, value: object) => {
  try {
    const result = await AsyncStorage.setItem(key, JSON.stringify(value));
    if (result !== null) {
      return result;
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const removeItem = async (key: string) => {
  try {
    const result = await AsyncStorage.removeItem(key);
    if (result !== null) {
      return result;
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const mergeItem = async (key: string, value: object) => {
  try {
    const result = await AsyncStorage.mergeItem(key, JSON.stringify(value));
    if (result !== null) {
      return result;
    }
  } catch (error) {
    // Error retrieving data
  }
};

