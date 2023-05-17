import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icons} from '../../styles';

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
      {props.showIcon ? (
        props.hide ? (
          <TouchableOpacity
            onPress={props.onPressIcon}
            style={{
              position: 'absolute',
              right: 0,
            }}>
            <Icons.Vector />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={props.onPressIcon}
            style={{position: 'absolute', right: 0}}>
            <Icons.Vector />
          </TouchableOpacity>
        )
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    // backgroundColor: 'cyan',
    // padding: '10%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // backgroundColor: 'cyan',
    // width: '100%',
    // height: 20,
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
