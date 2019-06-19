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
      password: "",
      warnausername: "#CCCCCC",
      warnapassword: "#CCCCCC"
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

        <Text style={styles.judul}>Halo, Selamat Datang!</Text>
        <Text style={styles.subjudul1}>Sudah ke kebun hari ini?</Text>
        <Text style={styles.subjudul2}>
          Segera pergi kebun biar cepat kaya!
        </Text>

        <Text style={styles.label}>Username</Text>
        <TextInput
          ref={input => {
            this.inputUsername = input;
          }}
          style={[styles.inputText, { borderColor: this.state.warnausername }]}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#999494"
          autoCapitalize="none"
          returnKeyType="next"
          onFocus={() => this.setState({ warnausername: "#1cbc9b" })}
          onBlur={() => this.setState({ warnausername: "#CCCCCC" })}
          onChangeText={text => this.handleInputText("username", text)}
          onSubmitEditing={() => {
            this.inputPassword.focus();
          }}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          ref={input => {
            this.inputPassword = input;
          }}
          style={[styles.inputText, { borderColor: this.state.warnapassword }]}
          placeholder="Password"
          underlineColorAndroid="transparent"
          returnKeyType="done"
          secureTextEntry={true}
          autoCapitalize="none"
          onFocus={() => this.setState({ warnapassword: "#1cbc9b" })}
          onBlur={() => this.setState({ warnapassword: "#CCCCCC" })}
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
  subjudul1: {
    fontSize: 16,
    marginBottom: 2
  },
  subjudul2: {
    fontSize: 16,
    marginBottom: 17
  },
  judul: {
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 11,
    marginBottom: 10
  },
  label: {
    fontWeight: "bold"
  },
  inputText: {
    marginTop: 5,
    marginBottom: 15,
    minHeight: 25,
    paddingLeft: 15,
    borderColor: "#c1c1c1",
    borderRadius: 4,
    borderWidth: 1.7
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
