import React from 'react';
import Expo, { LinearGradient } from 'expo';
import {
  View, Text, StyleSheet, StatusBar,
  TouchableOpacity,
} from 'react-native';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { operator, handleButtonPress } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleButtonPress(operator)}
      >
        <Text style={styles.item}>
          { operator }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: 1,
  },

  item: {
    color: '#fff',
    fontSize: 26,
  },
});

export default CalculatorButton;
