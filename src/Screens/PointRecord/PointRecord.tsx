import * as React from 'react';
import {StatusBar, StyleSheet, View, Text, Button} from 'react-native';
import {ScreenName} from "../../common/constains";

interface thisProps {
  navigation: any
}

interface thisState {

}
export class PointRecordScreen extends React.Component<thisProps, thisState> {
  static navigationOptions: any = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Màn hình ghi điểm</Text>
        <Button
          title="Quay lại"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.goBack()
          }}
        />
      </View>
    );
  }
}