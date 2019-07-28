// import 'babel-polyfill';

// import 'core-js/shim'; // included < Stage 4 proposals
// import 'regenerator-runtime/runtime';

// import 'core-js/es6/map';
// import 'core-js/es6/set';

// import 'antd/lib/style/index.css';
require('antd/lib/style/index.css');
require('styles/style');

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/Main';

if (module.hot){
  //实现热更新
  module.hot.accept();
}

console.log('hi, this is index.js');

ReactDOM.render(<App/>, document.getElementById('app'));