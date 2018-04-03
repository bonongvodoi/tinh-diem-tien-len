import * as React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import {ScreenName} from "../../common/constains";
import { Tabs, Header, Icon} from "native-base";
import {Colors} from "../../common/variables";
import {Tab1} from "./Tabs/Tab1";
import {Tab3} from "./Tabs/Tab3";
import {ResultTab} from "./Tabs/ResultTab";

const Button: any = require('native-base').Button;
const Tab: any = require('native-base').Tab;
interface thisProps {
  navigation: any
}

interface thisState {

}


export class PointRecordScreen extends React.Component<thisProps, thisState> {
  static navigationOptions: any = {
    header: null,
  };

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
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Ghi điểm tiến lên</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.renderHeader()}
          <Tabs initialPage={1}>
            <Tab heading="Ghi điểm"
                 tabStyle={styles.tabHeader}
                 textStyle={styles.tabHeaderText}
                 activeTabStyle={styles.activeTabHeader}
                 activeTextStyle={styles.activeTabHeaderText}
            >
              <Tab1/>
            </Tab>
            <Tab heading="Kết quả"
                 tabStyle={styles.tabHeader}
                 textStyle={styles.tabHeaderText}
                 activeTabStyle={styles.activeTabHeader}
                 activeTextStyle={styles.activeTabHeaderText}
            >
              <ResultTab/>
            </Tab>
            <Tab heading="Chi tiết"
                 tabStyle={styles.tabHeader}
                 textStyle={styles.tabHeaderText}
                 activeTabStyle={styles.activeTabHeader}
                 activeTextStyle={styles.activeTabHeaderText}

            >
              <Tab3/>
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