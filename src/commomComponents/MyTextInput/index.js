import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function MyTextInput(props) {
  return (
    <View style={styles.View}>
      <TextInput
        style={[styles.input, props.style]}
        placeholder={props.placeholder}
        value={props.value}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        placeholderTextColor="#000"
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
        maxLength={props.maxLength}
        multiline={props.multiline}
        autoCapitalize={props.autoCapitalize}
        onEndEditing={props.onEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    // backgroundColor: 'cyan',
    // padding: '10%',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#6495ed',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});
