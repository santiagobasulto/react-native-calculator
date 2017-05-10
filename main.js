import React from 'react';
import Expo, { LinearGradient } from 'expo';
import { StyleSheet, StatusBar } from 'react-native';
import CalculatorResponse from './components/CalculatorResponse';
import CalculatorButtonsContainer from './components/CalculatorButtonsContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      result: 0,
    };
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
    const { result } = this.state;

    return (
      <LinearGradient
        colors={['#3498db', '#8e44ad']}
        style={styles.container}
      >

        <CalculatorResponse
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
