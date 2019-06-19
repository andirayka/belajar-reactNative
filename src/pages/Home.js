import React, { Component } from "react";
import {
  View,
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

  submitLogin = () => {
    if (this.state.username == "admin" && this.state.password == "admin") {
      alert("Login Berhasil");
    } else {
      alert("Login Gagal");
    }
  };

  render() {
    return (
      // -------------------------ANDI-----------------------
      <View style={styles.container}>
        <StatusBar backgroundColor="#1cbc9b" barStyle="dark-content" />

        <TextInput
          ref={input => {
            this.username = input;
          }}
          style={styles.inputText}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#999494"
          autoCapitalize="none"
          onChange={text => this.handleInputText("username", text)}
          onSubmitEditing={() => {
            this.password.focus();
          }}
        />

        <TextInput
          ref={input => {
            this.password = input;
          }}
          style={styles.inputText}
          placeholder="Ketik password baru"
          underlineColorAndroid="transparent"
          returnKeyType="done"
          secureTextEntry={true}
          autoCapitalize="none"
          onChange={text => this.handleInputText("username", text)}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    marginTop: 15,
    marginBottom: 15,
    minHeight: 25,
    borderColor: "#c1c1c1",
    borderRadius: 4,
    borderWidth: 1
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  button: {
    backgroundColor: "#1cbc9b",
    padding: 15,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});
