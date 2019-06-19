import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
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

  // submitLogin = () => {
  //   if (this.state.username == "admin" && this.state.password == "admin") {
  //     alert("Login Berhasil");
  //   } else {
  //     alert("Login Gagal");
  //   }
  // };
  render() {
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#1cbc9b" barStyle="dark-content" />
        <TextInput
          placeholder="Ketik email Anda"
          underlineColorAndroid="#1cbc9b"
          returnKeyType="next"
          style={styles.inputText}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
        />

        <TextInput
          ref={input => {
            this.secondTextInput = input;
          }}
          placeholder="Ketik username baru"
          underlineColorAndroid="#1cbc9b"
          returnKeyType="next"
          // onChange={text => this.handleInputText("username", text)}
          style={styles.inputText}
          onSubmitEditing={() => {
            this.thirdTextInput.focus();
          }}
        />

        <TextInput
          placeholder="Ketik password baru"
          underlineColorAndroid="#1cbc9b"
          style={styles.inputText}
          returnKeyType="done"
          secureTextEntry={true}
          ref={input => {
            this.thirdTextInput = input;
          }}
        />

        <Picker
          selectedValue="2"
          style={styles.picker}
          // onValueChange={(itemValue, itemIndex) =>
          //   this.setState({ language: itemValue })
          // }
        >
          <Picker.Item label="SMA" value="1" />
          <Picker.Item label="SMK" value="2" />
          <Picker.Item label="Diploma" value="3" />
        </Picker>

        <Picker selectedValue="1" style={styles.picker}>
          <Picker.Item label="Lajang" value="1" />
          <Picker.Item label="Menikah" value="2" />
          <Picker.Item label="Bingung" value="3" />
        </Picker>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    marginTop: 15
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  picker: {
    padding: 12,
    minHeight: 50,
    minWidth: 100,
    marginTop: 10
  },
  button: {
    backgroundColor: "#1cbc9b",
    padding: 12,
    borderRadius: 50,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  }
});
