import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from '../../commomComponents/MyTextInput';
import MyButton from '../../commomComponents/MyButton';
import {Icons} from '../../styles';

export default function RegisterScreen() {
  const [name, setName] = useState('');

  return (
    <View style={{backgroundColor: '#fff', flex: 1, padding: '8%'}}>
      <MyTextInput
        placeholder="Full name"
        style={{color: '#000'}}
        showIcon={true}
      />

      <MyButton title="Hello" style={{marginVertical: 20}} />
      {/* <Icons.Vector /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
