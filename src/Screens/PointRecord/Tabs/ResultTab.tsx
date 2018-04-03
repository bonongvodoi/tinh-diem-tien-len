import * as React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {Colors} from "../../../common/variables";
import {ResultItem} from "../../../Components/ResultItem/ResultItem";
const Button: any = require('native-base').Button;

interface thisProps {
}

interface thisState {
  status: 'begin'| 'play' | 'end'
}

export class ResultTab extends React.Component<thisProps, thisState> {
  state: thisState = {
    status: 'end'
  };

  render() {
    return (
        <View style={styles.tabContent}>
          {this.state.status === 'begin' ? <View style={styles.card}>
            <Text style={styles.textInfo}> Trận đấu chưa bắt đầu </Text>
          </View> : null}
          {this.state.status === 'play' ? <View style={styles.card}>
            <Text style={styles.textInfo}> Trận đấu đang diễn ra </Text>
          </View> : null}
          {this.state.status === 'end' ? <ScrollView style={{alignSelf: 'stretch'}}>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
            <ResultItem/>
          </ScrollView> : null}
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