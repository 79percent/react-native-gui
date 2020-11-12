import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView, View } from 'react-native';
import { toString } from './utils';
import htmlFile from './index.html';
import htmlScript from './html.str';
import echartsStr from './echarts.min.str';

export default class App extends Component {
  static propTypes = {
    style: PropTypes.object.isRequired,
    option: PropTypes.object.isRequired,
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
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={ref => {
            this.chart = ref;
          }}
          style={[{ flex: 1 }, style]}
          scalesPageToFit={true}
          source={htmlFile}
        />
      </View>
    );
  }
}
