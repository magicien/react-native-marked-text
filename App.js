/**
 * Test App for TextInput bugfix
 *
 * Issue:
 * PR:
 * @flow
 */

import React, { Component } from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  textContainer: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    minHeight: 44,
  },
});

type Props = {};

type State = {
  singlelineChangeCount: number,
  singlelineValue: string,
  multilineChangeCount: number,
  multilineValue: string,
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      singlelineChangeCount: 0,
      singlelineValue: '',
      multilineChangeCount: 0,
      multilineValue: '',
    };
  }

  singlelineInput: TextInput;
  multilineInput: TextInput;

  handleChangeSingleline = (text: string) => {
    this.setState(prevState => {
      return {
        singlelineChangeCount: prevState.singlelineChangeCount + 1,
        singlelineValue: text,
      };
    });
  }

  handleChangeMultiline = (text: string) => {
    this.setState(prevState => {
      return {
        multilineChangeCount: prevState.multilineChangeCount + 1,
        multilineValue: text,
      };
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Singleline</Text>
          <Text>onChangeText ({this.state.singlelineChangeCount}): {this.state.singlelineValue}</Text>
          <TextInput
            onChangeText={this.handleChangeSingleline}
            onSubmitEditing={Keyboard.dismiss}
            ref={(input) => {
              this.singlelineInput = input;
            }}
            style={styles.textInput}
            value={this.state.singlelineValue}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Multiline</Text>
          <Text>onChangeText ({this.state.multilineChangeCount}): {this.state.multilineValue}</Text>
          <TextInput
            multiline
            onChangeText={this.handleChangeMultiline}
            onSubmitEditing={Keyboard.dismiss}
            ref={(input) => {
              this.multilineInput = input;
            }}
            style={styles.textInput}
            value={this.state.multilineValue}
          />
        </View>
      </SafeAreaView>
    );
  }
}

