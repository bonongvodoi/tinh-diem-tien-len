import {Dimensions, Platform} from "react-native";

export const NativeHelper = {
  ViewportWidth: Dimensions.get('window').width,
  ViewportHeight: Dimensions.get('window').height,
  Platform: Platform.OS,
};

export const ScreenName = {
  HomeScreen: 'HomeScreen',
  PointRecordScreen: 'PointRecordScreen',
  TutorialScreen: 'TutorialScreen'
};

export const MatchStatus = {
  Start: 0,
  Playing: 2,
  Finished: 4
}