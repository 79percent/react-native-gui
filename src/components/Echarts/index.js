import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { toString } from './utils';

export default class App extends Component {
  static propTypes = {
    style: PropTypes.object,
    option: PropTypes.object,
  };

  state = {};

  componentDidMount() {
    this.chart && this.chart.injectJavaScript(this.renderChart());
  }

  componentDidUpdate() {
    this.chart && this.chart.injectJavaScript(this.renderChart());
  }

  chart = null;

  renderChart = () => {
    const { option = {} } = this.props;
    return `
      var myChart = echarts.init(document.getElementById('main'));
      var option = ${toString(option)};
      myChart.setOption(option);
    `;
  };

  render() {
    const { style } = this.props;
    const baseUrl =
      Platform.OS === 'ios'
        ? { uri: './echarts/index.html' }
        : { uri: 'file:///android_asset/pages/echarts/index.html' };
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={ref => {
            this.chart = ref;
          }}
          style={[{ flex: 1 }, style]}
          scalesPageToFit={true}
          source={baseUrl}
        />
      </View>
    );
  }
}
