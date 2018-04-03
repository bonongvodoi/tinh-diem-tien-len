import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from "../../../common/variables";
import {Input, Label} from "native-base";
const Button: any = require('native-base').Button;

interface thisProps {
}

interface thisState {
    isStarted: boolean
}

export class Tab1 extends React.Component<thisProps, thisState> {

  componentWillMount(){
    this.setState({
      isStated: false
    })
  }

  renderInputName(){
    return (<View style={styles.inputRow}>
      <Input style={styles.input} placeholder='Tèo'/>
      <Input style={styles.input} placeholder='Tí'/>
      <Input style={styles.input} placeholder='Cuội'/>
      <Input style={styles.input} placeholder='Bờm'/>
    </View>)
  }

  renderLabelName(){
    return (<View style={styles.inputRow}>
      <Label style={styles.label}> Tèo</Label>
      <Label style={styles.label}> Tí</Label>
      <Label style={styles.label}> Cuội</Label>
      <Label style={styles.label}> Bờm</Label>
    </View>)
  }

  renderButtonStart() {
    return(
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
      <Button bordered
              style={styles.borderButton}
              onPress={() => {
              }}
      >
        <Text style={{fontWeight: 'bold', color: Colors.Black}}>Bắt đầu</Text>
      </Button>
    </View>)

  }
  render() {
    return (
        <View style={styles.tabContent}>
          <View style={styles.inputRowName}>
            { this.state.isStarted ? this.renderLabelName(): this.renderInputName()}
            { !this.state.isStarted ? this.renderButtonStart(): null}
          </View>
          <View style={{ paddingHorizontal: 5}}>
            <View style={styles.inputRow}>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
            </View>
            <View style={styles.inputRow}>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
            </View>
            <View style={styles.inputRow}>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
              <Input style={styles.input}/>
            </View>
          </View>

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
  },
  inputRowName: {
    borderBottomColor: Colors.RedStrong,
    borderBottomWidth: 1,
    marginVertical: 15
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5
  },
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    fontSize: 14,
    padding: 0
  },
  label: {
    width: '20%',
    height: 35,
    marginVertical: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 0
  },
  borderButton: {
    borderColor: Colors.RedStrong,
    width: '70%',
    height: 35,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 3,
    shadowColor: Colors.RedStrong,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
})