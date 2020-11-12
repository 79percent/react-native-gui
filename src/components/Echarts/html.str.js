import echartsScript from './echarts.min.str';

export default `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>ECharts</title>
    <style type="text/css">
      html,body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      #main {
        height: 100%;
        width: 100%;
      }
    </style>
    <script>
      ${echartsScript}
    </script>
  </head>
  <body>
    <div id="main"></div>
  </body>
  </html>
`;
