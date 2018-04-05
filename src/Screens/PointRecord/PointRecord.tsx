import * as React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import {MatchStatus, ScreenName} from "../../common/constains";
import { Header, Icon} from "native-base";
import {Colors} from "../../common/variables";
import {Tab1} from "./Tabs/Tab1";
import {Tab3} from "./Tabs/Tab3";
import {ResultTab} from "./Tabs/ResultTab";
import {getCurrentMatch, setCurrentMatch} from "../../Services/index";

const Button: any = require('native-base').Button;
const Tab: any = require('native-base').Tab;
const Tabs: any = require('native-base').Tabs;
interface thisProps {
  navigation: any
}

interface thisState {
  currentTab: number
}


export class PointRecordScreen extends React.Component<thisProps, thisState> {

  tab1: any;
  tab2: any;
  tab3: any;

  static navigationOptions: any = {
    header: null,
  };

  componentWillMount(){
    this.setState({currentTab: 0})
  }
  async onEndGame(){
    let data = await getCurrentMatch();

    if(data) {
      data.status = MatchStatus.Finished;
      await setCurrentMatch(data);
    }

    this.setState({currentTab: 1});
  }
  renderHeader() {
    return (
      <View style={{backgroundColor: Colors.RedStrong, flexDirection: 'row'}}>
        <View style={{
          height: 60,flex: 1, backgroundColor: Colors.RedStrong, justifyContent: 'center', alignItems: 'center',
          position: 'absolute', left: 0
        }}>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="ios-arrow-back" style={{color: '#fff', fontSize: 30}}/>
          </Button>
        </View>
        <View style={{flex: 4, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Ghi điểm tiến lên</Text>
        </View>
        <View style={{flex: 1, height: 60, justifyContent: 'center', alignItems: 'center'}}>
          <Button
            bordered
            style={{borderColor: Colors.White, width: '100%',justifyContent: 'center', alignItems: 'center'}}
            onPress={() =>{this.onEndGame()}}
          >
            <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: '#fff'}}> Kết thúc</Text>
          </Button>

        </View>
      </View>
    );
  }

  onTabChange(page: any){
    this.setState({currentTab: page.i});
    switch (page.i) {
      case 0: this.tab1 && this.tab1.onTabUpdate();
      case 1: this.tab2 && this.tab2.onTabUpdate();
      case 2: this.tab3 && this.tab3.onTabUpdate();
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.renderHeader()}
          <Tabs initialPage={this.state.currentTab || 0}  page={this.state.currentTab}
            onChangeTab={(page: any) => { this.onTabChange(page)}}
          >
            <Tab heading="Ghi điểm"
                 tabStyle={styles.tabHeader}
                 textStyle={styles.tabHeaderText}
                 activeTabStyle={styles.activeTabHeader}
                 activeTextStyle={styles.activeTabHeaderText}
            >
              <Tab1 ref={(e) =>{this.tab1 = e}}/>
            </Tab>
            <Tab heading="Kết quả"
                 tabStyle={styles.tabHeader}
                 textStyle={styles.tabHeaderText}
                 activeTabStyle={styles.activeTabHeader}
                 activeTextStyle={styles.activeTabHeaderText}
            >
              <ResultTab ref={(e) =>{this.tab2 = e}}/>
            </Tab>
            <Tab heading="Chi tiết"
                 tabStyle={styles.tabHeader}
                 textStyle={styles.tabHeaderText}
                 activeTabStyle={styles.activeTabHeader}
                 activeTextStyle={styles.activeTabHeaderText}

            >
              <Tab3 ref={(e) =>{this.tab3 = e}}/>
            </Tab>
          </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabHeader: {
    backgroundColor: Colors.White,
    borderBottomColor: Colors.RedStrong,
    borderBottomWidth: 1
  },
  tabHeaderText: {
    color: Colors.Gray,
  },
  activeTabHeader: {
    backgroundColor: Colors.White,
    borderBottomColor: Colors.RedStrong,
    borderBottomWidth: 3,
    zIndex: 99
  },
  activeTabHeaderText: {
    color: Colors.Black,
  }
});