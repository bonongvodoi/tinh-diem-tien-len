import * as React from "react";
import { View, StyleSheet} from "react-native";
import {AppNavigation} from './AppNavigation/AppNavigation';

export default class App extends React.Component<any, any>{
  render(){
    return (
      <View style={styles.container}>
        <AppNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});