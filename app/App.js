import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './store';

import Main from './general/components/Main';

export default class App extends React.Component {
  render() {
    return <Provider store={store}><PersistGate persistor={persistor}><View style={styles.container}>
      <Main/>
    </View></PersistGate></Provider>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
