import * as React from 'react'
import { StackNavigator } from 'react-navigation';
import {HomeScreen} from "../../Screens/Home/Home";
import {PointRecordScreen} from "../../Screens/PointRecord/PointRecord";
import {TutorialScreen} from "../../Screens/Tutorial/Tutorial";

export const HomeStackNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  PointRecordScreen: {
    screen: PointRecordScreen,
  },
  TutorialScreen: {
    screen: TutorialScreen
  }

}, {
  initialRouteName: "HomeScreen",
  headerMode : 'screen'
});