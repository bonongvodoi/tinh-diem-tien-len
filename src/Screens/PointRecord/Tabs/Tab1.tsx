import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from "../../../common/variables";
import {Content, Input, Label} from "native-base";
import {DataRow} from "../DataRow/DataRow";
import {MatchStatus} from "../../../common/constains";

const Button: any = require('native-base').Button;

interface thisProps {
}

interface thisState {
  isStarted: boolean,
  isAddNewRow: boolean,
  newRow: any,
  data: any
}

export class Tab1 extends React.Component<thisProps, thisState> {

  componentWillMount() {
    this.setState({
      isAddNewRow: true,
      newRow: {
        playerPoint1: '',
        playerPoint2: '',
        playerPoint3: '',
        playerPoint4: ''
      },
      data: {
        status: MatchStatus.Start,
        players: {
          playerName1: '',
          playerName2: '',
          playerName3: '',
          playerName4: ''
        },
        list: []
      }
    })
  }

  saveCurrentMatchToLocalStore(data: any){
    // Save to local storage here
  }

  onStartButtonClick() {
    let data = this.state.data;

    if (data.players.playerName1 == '') {
      data.players.playerName1 = 'P1'
    }
    if (data.players.playerName2 == '') {
      data.players.playerName2 = 'P2'
    }
    if (data.players.playerName3 == '') {
      data.players.playerName3 = 'P3'
    }
    if (data.players.playerName4 == '') {
      data.players.playerName4 = 'P4'
    }
    data.status = MatchStatus.Playing;

    this.setState({ data: data});

  }

  checkData(data: any) {
    console.log(data);
    if (data.playerPoint1 == null || data.playerPoint1 == '') return false;
    if (data.playerPoint2 == null || data.playerPoint2 == '') return false;
    if (data.playerPoint3 == null || data.playerPoint3 == '') return false;
    if (data.playerPoint4 == null || data.playerPoint4 == '') return false;
    return true;
  }

  onSaveNewRow(data: any) {
    if (this.checkData(data)) {
      let list = this.state.data.list.slice();
      list.push(data);

      this.setState({
        data: {...this.state.data, list}
      }, () => {
        this.resetNewRow();
        this.saveCurrentMatchToLocalStore(this.state.data);
      });

    }
  }

  onSaveEditRow(data: any) {
    if (this.checkData(data)) {
      let list = this.state.data.list.slice();
      // list[0] = data;

      this.setState({
        data: {...this.state.data, list}
      });
    }
  }

  resetNewRow() {
    this.setState({
      isAddNewRow: true,
      newRow: {
        playerPoint1: '',
        playerPoint2: '',
        playerPoint3: '',
        playerPoint4: ''
      }
    });
  }

  renderInputName() {
    return (<View style={styles.inputRow}>
      <Input style={styles.input} value={this.state.data.players.playerName1}
             onChangeText={(text: string) => {
               let data = this.state.data;
               data.players.playerName1 = text;
               this.setState({data: data});
             }}
             placeholder='Tèo'/>
      <Input style={styles.input} value={this.state.data.players.playerName2}
             onChangeText={(text: string) => {
               let data = this.state.data;
               data.players.playerName2 = text;
               this.setState({data: data});
             }}
             placeholder='Tí'/>
      <Input style={styles.input} value={this.state.data.players.playerName3}
             onChangeText={(text: string) => {
               let data = this.state.data;
               data.players.playerName3 = text;
               this.setState({data: data});
             }}
             placeholder='Cuội'/>
      <Input style={styles.input} value={this.state.data.players.playerName4}
             onChangeText={(text: string) => {
               let data = this.state.data;
               data.players.playerName4 = text;
               this.setState({data: data});
             }}
             placeholder='Bờm'/>
    </View>)
  }

  renderLabelName() {
    return (<View style={styles.inputRow}>
      <Label style={styles.label}> {this.state.data.players.playerName1}</Label>
      <Label style={styles.label}> {this.state.data.players.playerName2}</Label>
      <Label style={styles.label}> {this.state.data.players.playerName3}</Label>
      <Label style={styles.label}> {this.state.data.players.playerName4}</Label>
    </View>)
  }

  renderButtonStart() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Button bordered
                style={styles.borderButton}
                onPress={() => {
                  this.onStartButtonClick();
                }}
        >
          <Text style={{fontWeight: 'bold', color: Colors.Black}}>Bắt đầu</Text>
        </Button>
      </View>)

  }

  rowToAdd: any = null;

  onFocusToFirstCell() {
    this.rowToAdd.onFocusToFirstCell()
  }

  render() {
    return (
      <Content style={styles.tabContent}>
        <View style={styles.inputRowName}>
          {this.state.data.status == MatchStatus.Start ? this.renderInputName() : this.renderLabelName()}
          {this.state.data.status == MatchStatus.Start ? this.renderButtonStart() : null}
        </View>
        {
          this.state.data.status == MatchStatus.Playing ?
            <View style={{paddingHorizontal: 5}}>
              {
                this.state.data.list && this.state.data.list.length >= 4 ?
                  this.state.data.list.slice(this.state.data.list.length - 3, this.state.data.list.length).map((item: any, index: number) => {
                  return (
                    <DataRow key={index} data={item} onSaveData={(data) => this.onSaveEditRow(data)}/>
                  );
                }) : this.state.data.list.map((item: any, index: number) => {
                  return (
                    <DataRow key={index} data={item} onSaveData={(data) => this.onSaveEditRow(data)}/>
                  );
                })
              }
              {
                this.state.isAddNewRow ? <DataRow ref={(e) => {
                  this.rowToAdd = e
                }} data={this.state.newRow} onSaveData={(data) => this.onSaveNewRow(data)}
                /> : null
              }
            </View> : null
        }

      </Content>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1
  },
  card: {
    height: 120,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
    shadowOffset: {width: 0, height: 2},
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