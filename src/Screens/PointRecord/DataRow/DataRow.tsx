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
  onSaveData: (data: any)=> void,
}

export class DataRow extends React.Component<thisProps, thisState> {
  textInput1: any;
  textInput2: any;
  textInput3: any;
  textInput4: any;

  componentWillMount() {
    this.setState({data: this.props.data})
  }

  onSaveInputRow() {
      this.props.onSaveData(this.state.data);
  }

  public focusToFirstCell(){
    this.textInput1.focus();
  }

  componentWillReceiveProps(nextProps: any) {
    this.setState({data: nextProps.data});
  }

  onUpdateFocus(){
    if( this.state.data.playerPoint1 == '' ){
      this.textInput1.focus()
    } else
    if( this.state.data.playerPoint2 == '' ){
      this.textInput2.focus()
    } else
    if( this.state.data.playerPoint3 == '' ){
      this.textInput3.focus()
    }else
    if ( this.state.data.playerPoint4 == '' ){
      this.textInput4.focus()
    }
  }

  render() {
    if (this.state.data == null)
      return null;
    else
      return (
      <View style={styles.inputRow}>
        <TextInput style={styles.input}
               value={this.state.data.playerPoint1}
               ref={(input) => { this.textInput1 = input; }}
               blurOnSubmit={false}
               keyboardType={'numeric'}
               onChangeText={(text: string) => {
                 let data = this.state.data;
                 data.playerPoint1 = text;
                 this.setState({data: data});
                 setTimeout(()=>{this.onUpdateFocus();},500);
               }}/>
        <TextInput style={styles.input}
               value={this.state.data.playerPoint2}
               blurOnSubmit={false}
               ref={(input) => { this.textInput2 = input; }}
               keyboardType={'numeric'}
               onChangeText={(text: string) => {
                 let data = this.state.data;
                 data.playerPoint2 = text;
                 this.setState({data: data});
                 setTimeout(()=>{this.onUpdateFocus();},500);
               }}/>
        <TextInput style={styles.input}
               value={this.state.data.playerPoint3}
               blurOnSubmit={false}
               ref={(input) => { this.textInput3 = input; }}
               keyboardType={'numeric'}
               onChangeText={(text: string) => {
                 let data = this.state.data;
                 data.playerPoint3 = text;
                 this.setState({data: data});
                 setTimeout(()=>{this.onUpdateFocus();},500);
               }}/>
        <TextInput style={styles.input}
               value={this.state.data.playerPoint4}
               blurOnSubmit={false}
               ref={(input) => { this.textInput4 = input; }}
               keyboardType={'numeric'}
               onChangeText={(text: string) => {
                 let data = this.state.data;
                 data.playerPoint4 = text;
                 setTimeout(()=>{this.onUpdateFocus();},500);
                 this.onSaveInputRow();

               }}/>
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