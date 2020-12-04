import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

export default class BaiduMap extends Component {
  webViewRef = null;

  render() {
    const baseUrl =
      Platform.OS === 'ios'
        ? { uri: './baiduMap.html' }
        : { uri: 'file:///android_asset/pages/baiduMap/index.html' };
    return (
      <View style={styles.container}>
        <WebView
          ref={ref => {
            this.webViewRef = ref;
          }}
          source={baseUrl}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}
