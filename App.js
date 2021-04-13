import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {default as RectIcon} from './rect.svg';

const Image = styled(RectIcon)`
  width: 200px;
  height: 100px;
  border: 1px solid #f5f5f5;
`;

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        minHeight: '100%',
        alignItems: 'center',
      }}>
      <Image />
    </View>
  );
};

export default App;
