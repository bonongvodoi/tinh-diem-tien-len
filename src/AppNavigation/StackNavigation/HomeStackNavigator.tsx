import * as React from 'react'
import { StackNavigator } from 'react-navigation';
import {HomeScreen} from "../../Screens/Home/Home";
import {PointRecordScreen} from "../../Screens/PointRecord/PointRecord";

export const HomeStackNavigator = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  PointRecordScreen: {
    screen: PointRecordScreen,
  }

}, {
  initialRouteName: "HomeScreen",
  headerMode : 'screen'
});