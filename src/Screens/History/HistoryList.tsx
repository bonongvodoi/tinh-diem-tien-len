import * as React from 'react';
import {StatusBar, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {MatchStatus, ScreenName} from "../../common/constains";
import {Header, Icon, Left, Right, Title, Body, Container, Content, List, ListItem, Thumbnail} from "native-base";
import {AppImage, Colors} from "../../common/variables";

const Button: any = require('native-base').Button;
const Text: any = require('native-base').Text;

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

  getListData() {

    let dataList = [];
    for (let i = 0; i < 10; i++) {
      dataList.push(FakeDataItem);
    }

    console.log(dataList);

    this.setState({list: dataList});

  }

  renderHeader() {
    return (
      <View style={{backgroundColor: Colors.RedStrong, flexDirection: 'row'}}>
        <View style={{
          height: 60, width: 60, backgroundColor: Colors.RedStrong, justifyContent: 'center', alignItems: 'center',
          position: 'absolute', left: 0
        }}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="ios-menu" style={{color: '#fff', fontSize: 30}}/>
          </Button>
        </View>
        <View style={{flex: 1, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Lịch sử đấu</Text>
        </View>
      </View>
    );
  }

  render() {

    return (
      <Container style={{backgroundColor: Colors.White}}>
        {this.renderHeader()}
        <View style={{flex: 1}}>
          <Content>
            <List>
              {
                this.state.list && this.state.list.length > 0 && this.state.list.map((item: any, index: number) => {

                  let name = item.players.playerName1 + ' , ' + item.players.playerName2 + ' , ' + item.players.playerName3 + ' , ' + item.players.playerName4;

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
                      <Text note> Trinh: 1, Lan: 2</Text>
                      <Text note> Manh: 1, Nguyên: 2</Text>
                      </Body>
                      <Right>
                        <Text
                          note>{item.dateTime.getDay() + '/' + item.dateTime.getMonth() + '/' + item.dateTime.getFullYear()}</Text>
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
  }
})