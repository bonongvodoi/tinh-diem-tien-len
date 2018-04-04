import * as React from 'react';
import {StyleSheet, View, Text, Image, TextInput} from 'react-native';
import {Colors} from "../../../common/variables";
import {Input, Label} from "native-base";

interface dataRowModel {
  playerPoint1: string,
  playerPoint2: string,
  playerPoint3: string,
  playerPoint4: string
}

interface thisState {
  data: dataRowModel
}

interface thisProps {
  data: dataRowModel,
}

export class DataDisplayRow extends React.Component<thisProps, thisState> {

  render() {
    if (this.props.data == null)
      return null;
    else
      return (
      <View style={styles.inputRow}>
        <TextInput style={styles.input}
               value={this.props.data.playerPoint1}

               />
        <TextInput style={styles.input}
               value={this.props.data.playerPoint2}
              />
        <TextInput style={styles.input}
                   value={this.props.data.playerPoint3}
        />
        <TextInput style={styles.input}
                   value={this.props.data.playerPoint4}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '20%',
    height: 35,
    marginVertical: 5,
    marginHorizontal: 5,
    borderColor: Colors.GrayBorder,
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    fontSize: 14,
    padding: 0
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5
  },
})