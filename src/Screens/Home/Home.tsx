import * as React from 'react';
import {StatusBar, StyleSheet, View, Text, Image} from 'react-native';
import {ScreenName} from "../../common/constains";
import {Header, Icon, Left, Right, Title, Body, Container} from "native-base";
import {AppImage, Colors} from "../../common/variables";

const Button: any = require('native-base').Button;

interface thisProps {
  navigation: any
}

interface thisState {

}

export class HomeScreen extends React.Component<thisProps, thisState> {

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
      <Container style={{backgroundColor: Colors.White}}>
        {this.renderHeader()}
        <View style={{flex: 1}}>
          <View style={styles.logoContainer}>
            <Image source={AppImage.Logo} style={{height: '80%', width: '80%', resizeMode: 'contain'}}/>
          </View>
          <View style={{flex: 6}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Button bordered
                      style={styles.redButton}
                      onPress={() => {
                        this.props.navigation.navigate(ScreenName.PointRecordScreen);
                      }}
              >
                <Text style={{fontWeight: 'bold', color: Colors.White,}}>Bắt đầu</Text>
              </Button>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Button bordered
                      style={styles.borderButton}
                      onPress={() => {
                      }}
              >
                <Text style={{fontWeight: 'bold', color: Colors.Black}}>Hướng dẫn</Text>
              </Button>
              <Button bordered
                      style={styles.borderButton}
                      onPress={() => {
                      }}
              >
                <Text style={{fontWeight: 'bold', color: Colors.Black}}>Đánh giá</Text>
              </Button>
            </View>

          </View>
          <View style={{flex: 0.5, backgroundColor: Colors.RedStrong}}></View>
        </View>
      </Container>
    );
  }
}

export const styles = StyleSheet.create({
  logoContainer:{
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