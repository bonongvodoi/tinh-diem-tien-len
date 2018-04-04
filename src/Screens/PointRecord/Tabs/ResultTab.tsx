import * as React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {Colors} from "../../../common/variables";
import {ResultItem} from "../../../Components/ResultItem/ResultItem";
import {getCurrentMatch, removeCurrentMatch, setCurrentMatch} from "../../../Services/index";
import {MatchStatus} from "../../../common/constains";
const Button: any = require('native-base').Button;

interface thisProps {
}

interface thisState {
  status: any,
  ranks: any
}

const fakeData = {
  status: MatchStatus.Finished,
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
  status: MatchStatus.Finished,
  players: {
    playerName1: 'Nam',
    playerName2: 'Mạnh',
    playerName3: 'Hoàng',
    playerName4: 'Linh'
  },
  list: [
    {
      id: 1,
      playerPoint1: '3',
      playerPoint2: '3',
      playerPoint3: '1',
      playerPoint4: '0'
    },
    {
      id: 2,
      playerPoint1: '2',
      playerPoint2: '4',
      playerPoint3: '0',
      playerPoint4: '-2'
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

    let list = data.list;
    let p1 = list.map((item: any) => item.playerPoint1);
    let p2 = list.map((item: any) => item.playerPoint2);
    let p3 = list.map((item: any) => item.playerPoint3);
    let p4 = list.map((item: any) => item.playerPoint4);

    let p1sum = p1.reduce((a: any, b: any) => {
      a[b] = a[b] || [];
      a[b].push(b);
      return a;
    }, Object.create(null));

    let detail1:any = [];
    for(let key in p1sum){
      let o: any = {};
      o[key] = p1sum[key].length;
      detail1.push(o);
    }

    let p2sum = p2.reduce((a: any, b: any) => {
      a[b] = a[b] || [];
      a[b].push(b);
      return a;
    }, Object.create(null));

    let detail2:any = [];
    for(let key in p2sum){
      let o: any = {};
      o[key] = p2sum[key];
      detail2.push(o);
    }

    let p3sum = p3.reduce((a: any, b: any) => {
      a[b] = a[b] || [];
      a[b].push(b);
      return a;
    }, Object.create(null));

    let detail3:any = [];
    for(let key in p3sum){
      let o: any = {};
      o[key] = p3sum[key];
      detail3.push(o);
    }

    let p4sum = p4.reduce((a: any, b: any) => {
      a[b] = a[b] || [];
      a[b].push(b);
      return a;
    }, Object.create(null));

    let detail4:any = [];
    for(let key in p4sum){
      let o: any = {};
      o[key] = p4sum[key];
      detail4.push(o);
    }

    let details: any = {
      player1: detail1,
      player2: detail2,
      player3: detail3,
      player4: detail4,
    };

    let sum1 = p1.reduce((a: any, b: any) => a + b, 0);
    let sum2 = p2.reduce((a: any, b: any) => a + b, 0);
    let sum3 = p3.reduce((a: any, b: any) => a + b, 0);
    let sum4 = p4.reduce((a: any, b: any) => a + b, 0);

    let rank = [
      {player: 1, sum: sum1},
      {player: 2, sum: sum2},
      {player: 3, sum: sum3},
      {player: 4, sum: sum4},
    ];
    rank.sort((a: any, b: any) => b.sum - a.sum);

    let players = data.players;

    for(let i = 0; i < 4; i++){
      let number = rank[i].player;
      ranks[i] = {
        rank: i,
        playerName: players['playerName' + number],
        summaryPoint: rank[i].sum,
        detail: details['player' + number]
      }
    }

    this.setState({
      status: status,
      ranks: ranks
    })
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