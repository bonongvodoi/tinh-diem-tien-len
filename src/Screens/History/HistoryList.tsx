import * as React from 'react';
import {StatusBar, StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import {MatchStatus, ScreenName} from "../../common/constains";
import {Header, Icon, Left, Right, Title, Body, Container, Content, List, ListItem, Thumbnail} from "native-base";
import {AppImage, Colors} from "../../common/variables";
import {getAllHistoryMatches, setAllHistoryMatches} from "../../Services/index";

const Button: any = require('native-base').Button;
const Text: any = require('native-base').Text;
const TextRN: any = require('react-native').Text;

const FakeDataItem = {
  status: MatchStatus.Finished,
  dateTime: new Date(),
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

interface thisProps {
  navigation: any
}

interface thisState {
  list: any
}


export class HistoryList extends React.Component<thisProps, thisState> {

  static navigationOptions: any = {
    header: null,
  };

  componentWillMount() {
    this.setState({list: []});
    this.getListData();
  }

  async getListData() {

    // let dataList = [];
    // for (let i = 0; i < 10; i++) {
    //   dataList.push(FakeDataItem);
    // }
    //
    // console.log(dataList);
    let data = await getAllHistoryMatches()
    this.setState({list: data});

  }

 async onDeleteHistory(){
   Alert.alert(
     'Xác nhận',
     'Bạn có chắc chắn muốn tất cả xóa lịch sử trận đấu?',
     [
       {
         text: 'Không', onPress: () => {
       }
       },
       {
         text: 'Có', onPress: () => {
          setAllHistoryMatches(null);
         this.setState({list: null});
       }
       },
     ],
     {cancelable: false}
   )

  }

  renderHeader() {
    return (
      <View style={{backgroundColor: Colors.RedStrong, flexDirection: 'row'}}>
        <View style={{
          height: 60, flex: 1, backgroundColor: Colors.RedStrong, justifyContent: 'center', alignItems: 'center'
        }}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="ios-menu" style={{color: '#fff', fontSize: 30}}/>
          </Button>
        </View>
        <View style={{flex: 4, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#fff'
          }}>Lịch sử đấu</Text>
        </View>
        <View style={{flex: 1, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            bordered
            style={{borderColor: Colors.White, width: '100%', justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              this.onDeleteHistory()
            }}
          >
            <TextRN style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: '#fff'}} uppercase={false}> Xóa</TextRN>
          </Button>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Container style={{backgroundColor: Colors.White}}>
        {this.renderHeader()}
        <View style={{flex: 1}}>
          {
            !this.state.list &&
            <View style={styles.card}>
              <Text style={styles.textInfo}>Không có dữ liệu trận đấu cũ</Text>
            </View>
          }
          <Content>
            <List>
              {
                this.state.list && this.state.list.length > 0 && this.state.list.map((item: any, index: number) => {

                  let name = item.players.playerName1 + ' , ' + item.players.playerName2 + ' , ' + item.players.playerName3 + ' , ' + item.players.playerName4;

                  let list = item.list;
                  let s1 = 0, s2 = 0, s3 = 0, s4 = 0;

                  list && list.length > 0 && list.forEach((item: any)=>{
                    s1 = s1 + (+item.playerPoint1);
                    s2 = s2 + (+item.playerPoint2);
                    s3 = s3 + (+item.playerPoint3);
                    s4 = s4 + (+item.playerPoint4);
                  });

                  return (
                    <ListItem avatar key={index}>
                      <Left>
                        <TouchableOpacity
                          onPress={() => this.props.navigation.navigate(ScreenName.HistoryDetails, {data: item})}>
                          <Thumbnail
                            source={{uri: 'https://cdn4.iconfinder.com/data/icons/casino-royale/512/cards_02-512.png'}}/>
                        </TouchableOpacity>
                      </Left>
                      <Body>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.navigate(ScreenName.HistoryDetails, {data: item})}>
                        <Text>{name}</Text>
                      </TouchableOpacity>
                      <Text note> {`${item.players.playerName1}: ${s1}, ${item.players.playerName2}: ${s2}` }</Text>
                      <Text note> {`${item.players.playerName3}: ${s3}, ${item.players.playerName4}: ${s4}` }</Text>
                      </Body>
                      <Right>
                        <Text
                          note>{item.dateTime}</Text>
                      </Right>
                    </ListItem>)
                })
              }
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}

export const styles = StyleSheet.create({
  logoContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderButton: {
    borderColor: Colors.RedStrong,
    width: '35%',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 3,
    shadowColor: Colors.RedStrong,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
  },
  redButton: {
    borderColor: Colors.RedStrong,
    backgroundColor: Colors.RedStrong,
    width: '60%',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 3,
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
  }
})