import * as React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {Colors} from "../../../common/variables";
import {ResultItem} from "../../../Components/ResultItem/ResultItem";
import {getCurrentMatch, removeCurrentMatch, setCurrentMatch} from "../../../Services/index";
const Button: any = require('native-base').Button;

interface thisProps {
}

interface thisState {
  data: any,
  summary: any
}

export class ResultTab extends React.Component<thisProps, thisState> {

  componentWillMount() {
    this.setState({
      summary:{
        playerTotalPoint1: 0,
        playerTotalPoint2: 0,
        playerTotalPoint3: 0,
        playerTotalPoint4: 0
      },
      data: null
    });
    this.getDataFromLocalAsync();
  }

  async getDataFromLocalAsync(){
    // removeCurrentMatch();
    // setCurrentMatch(fdata);
    let data = await getCurrentMatch();
    this.setState({data: data}, ()=>{ this.summaryData() })
  }

  summaryData(){
    let list = this.state.data.list;
    console.log('manh abcxyz');
    console.log(this.state.data);
    let s1 = 0, s2 = 0, s3 = 0, s4 = 0;

    list && list.forEach((item: any)=>{
      s1 = s1 + (+item.playerPoint1);
      s2 = s2 + (+item.playerPoint2);
      s3 = s3 + (+item.playerPoint3);
      s4 = s4 + (+item.playerPoint4);
    });

    this.setState({summary: {
      playerTotalPoint1: s1,
      playerTotalPoint2: s2,
      playerTotalPoint3: s3 ,
      playerTotalPoint4: s4
    }});
  }

  render() {
    if(this.state.data === null) return null;
    return (
        <View style={styles.tabContent}>
          {this.state.data.status === 0 ? <View style={styles.card}>
            <Text style={styles.textInfo}> Trận đấu chưa bắt đầu </Text>
          </View> : null}
          {this.state.data.status === 1 ? <View style={styles.card}>
            <Text style={styles.textInfo}> Trận đấu đang diễn ra </Text>
          </View> : null}
          {this.state.data.status === 2 ? <ScrollView style={{alignSelf: 'stretch'}}>
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