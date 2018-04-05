import * as React from 'react';
import {Content, Text} from 'native-base';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeHelper, ScreenName} from "../../common/constains";
import {Colors} from "../../common/variables";

const defaultAvatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Taxus_wood.jpg/220px-Taxus_wood.jpg';

const menuData = [
  {
    title: 'Hướng dẫn',
    linkTo: ScreenName.HomeScreen,
  },
  {
    title: 'Về chúng tôi',
    linkTo: ScreenName.HomeScreen
  },
  {
    title: 'Đánh giá ứng dụng',
    linkTo: ScreenName.HomeScreen
  },
  {
    title: 'Lịch sử đấu',
    linkTo: ScreenName.HistoryList
  }
];

interface thisProps {
  navigation: any
}
export class SideBar extends React.Component<thisProps, any> {

  componentWillUnmount() {
  }

  routeToScreen(screenName: string) {
    if (screenName) {
      this.props.navigation.navigate(screenName);
    }
  }

  render() {
    const activeMenuIndex = -1;
    return (
      <View style={style.container}>
        <View style={style.headerLine}></View>
        <View style={style.menuListContainer}>
          {menuData.map((m, index) =>
            <TouchableOpacity activeOpacity={0.8} key={index}
                              onPress={() => this.routeToScreen(m.linkTo)}
                              style={[style.menuListItem, activeMenuIndex == index ? style.menuListItemSelected : null]}>
              <Text uppercase={false}
                    style={[style.menuListItemText, activeMenuIndex == index ? style.menuListItemTextSelected : null]}>{m.title}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }


}

const avatarSize = NativeHelper.ViewportWidth * .3;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLine: {
    height: 60,
    backgroundColor: Colors.RedStrong,
    width: '100%',
    elevation: 1,
  },
  menuListContainer: {
    flex: 7.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  menuListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomWidth : 1,
    borderBottomColor : Colors.AliceBlue,
    elevation: 1,
  },
  menuListItemSelected: {
    backgroundColor: Colors.Blue,
  },
  menuListItemIcon: {
    width: 30,
    height: 30,
    tintColor: Colors.Gray,
  },
  menuListItemIconSelected: {
    tintColor: Colors.White,
  },
  menuListItemText: {
    fontSize: 16,
    color: Colors.Gray,
    marginLeft: 10
  },
  menuListItemTextSelected: {
    color: Colors.White,
  },
});
