import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './src/screen';

const App = () => {
  return (
    <>
      <Home />
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
    </>
  );
};

export default App;
