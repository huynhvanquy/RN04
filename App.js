
import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoInput';
import DemoStyle from './src/Component/DemoStyle';
import ExamplePage from './src/Component/ExamplePage';
import BaiTap02 from './src/Component/BaiTap02';

const App = ()=>{
  return (
    <Fragment>
      {/* <StateFull />
      <StateLess />
      <DemoImage />
      <DemoInput />
      <DemoStyle />
      <ExamplePage /> */}
      <BaiTap02 />
    </ Fragment>
  );
}

export default App;