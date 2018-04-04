import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from "../../../common/variables";
import {Content, Input} from "native-base";
import {DataRow} from "../DataRow/DataRow";
import {DataDisplayRow} from "../DataRow/DataDisplayRow";
import {getCurrentMatch} from "../../../Services/index";
import {MatchStatus} from "../../../common/constains";

const Button: any = require('native-base').Button;
const Label: any = require('native-base').Label;

interface thisProps {
}

interface thisState {
  data: any,
  summary: any
}
// fake data
const fdata = {
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

export class Tab3 extends React.Component<thisProps, thisState> {

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
    let data = await getCurrentMatch();
    console.log('TRINH TEST');
    console.log(data);
    this.setState({data: data}, ()=>{ this.summaryData() })
   }

   summaryData(){
     let list = this.state.data.list;
     let s1 = 0, s2 = 0, s3 = 0, s4 = 0;

     list && list.length > 0 && list.forEach((item: any)=>{
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

  renderLabelName() {
    return (<View style={styles.inputRow}>
      <Label style={styles.label}> {this.state.data.players.playerName1}</Label>
      <Label style={styles.label}> {this.state.data.players.playerName2}</Label>
      <Label style={styles.label}> {this.state.data.players.playerName3}</Label>
      <Label style={styles.label}> {this.state.data.players.playerName4}</Label>
    </View>)
  }

  renderSummary() {
    return (<View style={styles.summaryRow}>
      <Label style={[styles.label,{color: Colors.Black}]}> {this.state.summary.playerTotalPoint1}</Label>
      <Label style={[styles.label,{color: Colors.Black}]}> {this.state.summary.playerTotalPoint2}</Label>
      <Label style={[styles.label,{color: Colors.Black}]}> {this.state.summary.playerTotalPoint3}</Label>
      <Label style={[styles.label,{color: Colors.Black}]}> {this.state.summary.playerTotalPoint4}</Label>
    </View>)
  }

  render() {
    if (this.state.data) return null;
    return (
      <Content style={styles.tabContent}>
        <View style={styles.inputRowName}>
          { this.state.data && this.renderLabelName() }
          { this.state.data && this.renderSummary() }
        </View>
        {

            <View style={{paddingHorizontal: 5}}>
              {
                this.state.data && this.state.data.list && this.state.data.list.map((item: any, index: number) => {
                    return (
                      <DataDisplayRow key={index} data={item}/>
                    );
                  })
              }
            </View>
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
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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