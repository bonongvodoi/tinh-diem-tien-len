import * as React from 'react'
import { StackNavigator } from 'react-navigation';
import {HistoryList} from "../../Screens/History/HistoryList";
import {HistoryDetails} from "../../Screens/History/HistoryDetails";

export const HistoryStackNavigator = StackNavigator({
  HistoryList: {
    screen: HistoryList
  },
  HistoryDetails: {
    screen: HistoryDetails
  },

}, {
  initialRouteName: "HistoryList",
  headerMode : 'screen'
});