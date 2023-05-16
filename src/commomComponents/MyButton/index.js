import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function MyButton(props) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.btn, props.style]}
        onPress={props.onPress}>
        <Text style={styles.btntxt}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: '100%',
    backgroundColor: '#6495ed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntxt: {fontSize: 16, fontStyle: 'normal', fontWeight: '800'},
});
