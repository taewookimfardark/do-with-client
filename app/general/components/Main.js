import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';


class Main extends React.PureComponent {
  render() {
    return <View>
      <Text>hohoho main</Text>
    </View>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main)

