import React from 'react';
import Expo, { LinearGradient } from 'expo';
import { StyleSheet, StatusBar } from 'react-native';
import CalculatorResponse from './components/CalculatorResponse';
import CalculatorButtonsContainer from './components/CalculatorButtonsContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      first: '0',
      second: '',
      operator: '',
      result: 0,
      isResult: false,
    };

    this.refresh = this.refresh.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  getResult() {
    // This function should get the first input, the operator and
    // the second input and calculate the result.
  }

  refresh() {
    // This function should get all the state to its initial values.
  }


  handleButtonPress(button) {
    // This function should check which 'button' was pressed
    // and update state values
    // TIP: before performing any changes check the state
    // before clicking that button.
  }

  render() {
    const { first, second, operator, result } = this.state;

    return (
      <LinearGradient
        colors={['#3498db', '#8e44ad']}
        style={styles.container}
      >

        <CalculatorResponse
          first={first}
          second={second}
          operator={operator}
          result={result}
          refresh={this.refresh}
        />

        <CalculatorButtonsContainer
          handleButtonPress={this.handleButtonPress}
        />

        <StatusBar barStyle="light-content" />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Expo.registerRootComponent(App);
