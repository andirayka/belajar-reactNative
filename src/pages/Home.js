import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputText = (key, text) => {
    this.setState({
      [key]: text
    });
  };

  warnaSubmit = () => {
    if (this.state.username == "" || this.state.password == "") {
      return styles.buttonDisabled;
    } else {
      return styles.buttonEnabled;
    }
  };

  submitLogin = () => {
    if (this.state.username == "" || this.state.password == "") {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#1cbc9b" barStyle="dark-content" />

        <TextInput
          ref={input => {
            this.inputUsername = input;
          }}
          style={styles.inputText}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#999494"
          autoCapitalize="none"
          returnKeyType="next"
          onChangeText={text => this.handleInputText("username", text)}
          onSubmitEditing={() => {
            this.inputPassword.focus();
          }}
        />

        <TextInput
          ref={input => {
            this.inputPassword = input;
          }}
          style={styles.inputText}
          placeholder="Ketik password baru"
          underlineColorAndroid="transparent"
          returnKeyType="done"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={text => this.handleInputText("password", text)}
        />

        <TouchableOpacity
          // style={styles.buttonDisabled}
          style={this.warnaSubmit()}
          // disabled={this.state.username == "" || this.state.password == ""}
          disabled={this.submitLogin()}
        >
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

        <Text style={styles.lupaSandi}>Lupa kata sandi?</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    marginTop: 15,
    marginBottom: 15,
    minHeight: 25,
    paddingLeft: 15,
    borderColor: "#c1c1c1",
    borderRadius: 4,
    borderWidth: 1
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonEnabled: {
    backgroundColor: "#1cbc9b",
    padding: 15,
    borderRadius: 5,
    marginTop: 10
  },
  buttonDisabled: {
    backgroundColor: "#CCCCCC",
    padding: 15,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  lupaSandi: {
    color: "#1cbc9b",
    textAlign: "center",
    marginTop: 12
  }
});
