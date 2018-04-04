import {AsyncStorage} from "react-native";
const CURRENT_MATCH = 'currentMatch';
const ALL_HISTORY_MATCHES = 'allHistoryMatches';

//current match
export const getCurrentMatch = () => {
  let currentMatch = getItem(CURRENT_MATCH);
  return currentMatch;
};

export const setCurrentMatch = (value: object) => {
  let result = setItem(CURRENT_MATCH, value);
  return result;
};

export const mergeCurrentMatch = (value: object) => {
  let result = mergeItem(CURRENT_MATCH, value);
  return result;
};

//history matches
export const getAllHistoryMatches = () => {
  let currentMatch = getItem(ALL_HISTORY_MATCHES);
  return currentMatch;
};

export const setAllHistoryMatches = (value: object) => {
  let result = setItem(ALL_HISTORY_MATCHES, value);
  return result;
};

export const mergeAllHistoryMatches = (value: object) => {
  let result = mergeItem(ALL_HISTORY_MATCHES, value);
  return result;
};

export const removeAllHistoryMatches = () => {
  let result = removeItem(ALL_HISTORY_MATCHES);
  return result;
};

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

