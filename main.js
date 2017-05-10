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
    const { first, second, operator } = this.state;

    const parsedFirst = parseFloat(first);
    const parsedSecond = parseFloat(second) || 0;
    let result = 0;

    switch (operator) {
      case '+':
        result = parsedFirst + parsedSecond;
        break;
      case '−':
        result = parsedFirst - parsedSecond;
        break;
      case '×':
        result = parsedFirst * parsedSecond;
        break;
      case '÷':
        if (!parsedSecond || parsedSecond === 0) {
          result = 'Error';
        } else {
          result = parseFloat(parsedFirst / parsedSecond).toFixed(8);
        }

        break;
      default:
        // console.log('wrong operator');
    }

    this.setState({
      result,
      isResult: true,
    });
  }

  refresh() {
    this.setState({
      first: '0',
      second: '',
      operator: '',
      result: 0,
    });
  }


  handleButtonPress(button) {
    const { isResult } = this.state;
    let { first, second, operator } = this.state;

    switch (button) {
      case '0':
        if (!isResult) {
          if (!operator) {
            if (first[0] !== '0' || first.length !== 1) {
              first += '0';
            }
          } else if (second[0] !== '0' || second.length !== 1) {
            second += '0';
          } else {
            second = '0';
          }

          this.setState({ first, second, operator });
        } else {
          this.setState({
            first: '0',
            second: '',
            operator: '',
            result: 0,
            isResult: false,
          });
        }

        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (!isResult) {
          if (!operator) {
            if (first[0] === '0' && first.length === 1) {
              first = button;
            } else {
              first += button;
            }
          } else if (second[0] === '0' && second.length === 1) {
            second = button;
          } else {
            second += button;
          }

          this.setState({ first, second, operator });
        } else {
          this.setState({
            first: button,
            second: '',
            operator: '',
            result: 0,
            isResult: false,
          });
        }

        break;
      case '.':
        if (!operator) {
          if (!first.includes('.')) {
            first += button;
          }
        } else if (!second.includes('.')) {
          second += button;
        }

        this.setState({ first, second, operator });

        break;
      case '+':
      case '−':
      case '×':
      case '÷':
        if (!operator) {
          operator = button;

          this.setState({ first, second, operator });
        } else {
          this.getResult();
        }
        break;
      case '=':
        this.getResult();
        break;
      default:
          // console.log('wrong operator');
    }
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
