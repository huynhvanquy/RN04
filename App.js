
import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoInput';
import DemoStyle from './src/Component/DemoStyle';
import ExamplePage from './src/Component/ExamplePage';
import BaiTap02 from './src/Component/BaiTap02';
import BiddingData from './src/HanderComponent/BiddingData';
import ExamBidding from './src/HanderComponent/ExamBidding';
import BaiTap03 from './src/Component/BaiTap03';
import RenderWithMap from './src/Component/RenderWithMap';
import DemoProps from './src/Props/DemoProps';
import DemoScrollView from './src/Props/DemoScrollView';
import DemoFlatList from './src/Props/DemoFlatList';
import DemoSectionList from './src/Props/DemoSectionList';
import ExamRenderMap from './src/Props/ExamRenderMap';
import GameApp from './src/GameApp';
import DemoCallAPI from './src/DemoCallAPI';
import LoginScreen from './src/LoginUI';

const App = ()=>{
  return (
    <Fragment>
      {/* <StateFull />
      <StateLess />
      <DemoImage />
      <DemoInput />
      <DemoStyle />
      <ExamplePage />
      <BaiTap02 />
      <BiddingData /> */}
      {/* <ExamBidding /> */}
      {/* <BaiTap03 /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoScrollView /> */}
      {/* <DemoFlatList /> */}
      {/* <DemoSectionList /> */}
      {/* <ExamRenderMap /> */}
      {/* <GameApp /> */}
      {/* <DemoCallAPI /> */}
      <LoginScreen />
    </ Fragment>
  );
}

export default App;