import * as React from 'react';
import {StatusBar, StyleSheet, View, Text, Image} from 'react-native';
import {NativeHelper, ScreenName} from "../../common/constains";
import {AppImage, Colors} from "../../common/variables";
import {Button} from "native-base";

let Carousel = require('react-native-carousel');

interface thisProps {
  navigation: any
}

interface thisState {

}

export class TutorialScreen extends React.Component<thisProps, thisState> {
  static navigationOptions: any = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Carousel width={NativeHelper.ViewportWidth}
                  animate={false}
                  loop={false}
                  indicatorOffset={-15}
                  inactiveIndicatorColor='rgba(0, 0, 0, 0.3)'
        >
          {AppImage.TutorialImages.map((image, index) => {
            return (
              <View key={index} style={styles.container}>
                <Image source={image} style={{height: '100%', width: '100%', resizeMode: 'stretch'}}/>
              </View>
            );
          })}
        </Carousel>
        <View style={styles.buttonContainer}>
          <Button style={styles.cancelButton}
                  onPress={() => {
                    this.props.navigation.goBack()
                  }}
          >
            <Text style={{fontWeight: 'bold', color: Colors.White}}>Hủy bỏ</Text>
          </Button>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width: NativeHelper.ViewportWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10
  },
  cancelButton: {
    backgroundColor: '#387ef5',
    paddingHorizontal: 20
  }
});