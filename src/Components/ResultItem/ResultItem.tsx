import * as React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import {AppImage, Colors} from "../../common/variables";

interface thisProps {
}

interface thisState {
  visible: boolean
}

export class ResultItem extends React.Component<thisProps, thisState> {
  state: thisState = {
    visible: false
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.setState({visible: !this.state.visible})}>
          <View style={this.state.visible ? [styles.main, {backgroundColor: '#e5e5e5'}] : styles.main}>
            <View style={styles.imageContainer}>
              <Image source={AppImage.Rank[0]} style={styles.image}/>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}> Cuội </Text>
              <Text style={styles.text}> Tổng số điểm: 5 </Text>
            </View>
          </View>
        </TouchableHighlight>
        {this.state.visible ? <View style={styles.detail}>
          <View style={styles.detailItem}>
            <Text> Số trận được 3 điểm: </Text>
            <Text> 2 trận. </Text>
          </View>
          <View style={styles.detailItem}>
            <Text> Số trận được 3 điểm: </Text>
            <Text> 2 trận. </Text>
          </View>
        </View> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00f'
  },
  main: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderBottomColor: '#a2a2a2',
    borderBottomWidth: 2
  },
  detail: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  detailItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {

  },
  contentContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24
  },
  text: {
    fontSize: 14
  },
  textRight: {
    textAlign: 'right',
    alignSelf: 'stretch'
  }


});