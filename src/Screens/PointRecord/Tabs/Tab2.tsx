import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from "../../../common/variables";
const Button: any = require('native-base').Button;

interface thisProps {
}

interface thisState {

}

export class Tab2 extends React.Component<thisProps, thisState> {

  render() {
    return (
        <View style={styles.tabContent}>
          <View style={styles.card}>
            <Text style={styles.textInfo}> This is tab content</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContent:{
    flex: 1
  },
  card: {
    height: 120,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInfo: {
    color: Colors.Black,
    fontSize: 16,
  }
})