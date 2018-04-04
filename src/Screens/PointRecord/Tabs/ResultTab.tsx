import * as React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {Colors} from "../../../common/variables";
import {ResultItem} from "../../../Components/ResultItem/ResultItem";
import {getCurrentMatch, removeCurrentMatch, setCurrentMatch} from "../../../Services/index";
const Button: any = require('native-base').Button;

interface thisProps {
}

interface thisState {
  status: number,
  ranks: any
}

const fakeData = {
  status: 2,
  ranks: [
    {
      rank: 0,
      playerName: 'Teo',
      summaryPoint: 30,
      detail: [
        {'3': 5},
        {'2': 4},
        {'1': 3}
      ]
    },
    {
      rank: 1,
      playerName: 'Ti',
      summaryPoint: 24,
      detail: [
        {'3': 5},
        {'2': 4},
        {'1': 3}
      ]
    },
    {
      rank: 2,
      playerName: 'To',
      summaryPoint: 23,
      detail: [
        {'3': 5},
        {'2': 4},
        {'1': 3}
      ]
    },
    {
      rank: 3,
      playerName: 'Tu',
      summaryPoint: 20,
      detail: [
        {'3': 5},
        {'2': 4},
        {'1': 3}
      ]
    }
  ]
};

const fDatabase = {
  status: 2,
  players: {
    playerName1: 'Nam',
    playerName2: 'Mạnh',
    playerName3: 'Hoàng',
    playerName4: 'Linh'
  },
  list: [
    {
      id: 1,
      playerPoint1: '13',
      playerPoint2: '12',
      playerPoint3: '21',
      playerPoint4: '1'
    },
    {
      id: 2,
      playerPoint1: '1',
      playerPoint2: '11',
      playerPoint3: '1',
      playerPoint4: '1'
    },
    {
      id: 3,
      playerPoint1: '1',
      playerPoint2: '12',
      playerPoint3: '1',
      playerPoint4: '1'
    },
    {
      id: 4,
      playerPoint1: '1',
      playerPoint2: '1',
      playerPoint3: '1',
      playerPoint4: '2'
    }
  ]
};
export class ResultTab extends React.Component<thisProps, thisState> {

  async componentWillMount() {
    this.setState({
      status: 2,
      ranks: null
    });
    // removeCurrentMatch();
    // setCurrentMatch(fdata);
    let data = await getCurrentMatch();
    this.convertDataToState(fDatabase);
  }

  convertDataToState(data: any){
    let status = data.status;
    let ranks:any = [];



    console.log('ManhNguyenBa');
    console.log(fakeData);
    this.setState({
      status: status,
      ranks: ranks
    })
  }

  summaryData(){
    let list:any = [];
    let s1 = 0, s2 = 0, s3 = 0, s4 = 0;
    list && list.forEach((item: any)=>{
      s1 = s1 + (+item.playerPoint1);
      s2 = s2 + (+item.playerPoint2);
      s3 = s3 + (+item.playerPoint3);
      s4 = s4 + (+item.playerPoint4);
    });

    // this.setState({summary: {
    //   playerTotalPoint1: s1,
    //   playerTotalPoint2: s2,
    //   playerTotalPoint3: s3 ,
    //   playerTotalPoint4: s4
    // }});
  }

  renderResult(){
    return (
      <ScrollView style={{alignSelf: 'stretch'}}>
        { (this.state.ranks || []).map((item: object, index: number) => <ResultItem key={index} item={item}/>) }
      </ScrollView>
    );
  }

  render() {
    if(this.state.status === null) return null;
    return (
        <View style={styles.tabContent}>
          {this.state.status === 0 ? <View style={styles.card}>
            <Text style={styles.textInfo}> Trận đấu chưa bắt đầu </Text>
          </View> : null}
          {this.state.status === 1 ? <View style={styles.card}>
            <Text style={styles.textInfo}> Trận đấu đang diễn ra </Text>
          </View> : null}
          {this.state.status === 2 ? this.renderResult() : null}
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