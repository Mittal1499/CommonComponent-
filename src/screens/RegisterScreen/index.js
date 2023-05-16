import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from '../../commomComponents/MyTextInput';
import MyButton from '../../commomComponents/MyButton';

export default function RegisterScreen() {
  const [name, setName] = useState('');

  return (
    <View style={{backgroundColor: '#fff', flex: 1, padding: '8%'}}>
      <MyTextInput placeholder="Full name" style={{color: '#000'}} />
      <MyTextInput
        placeholder="Valid email"
        style={{color: '#000', marginVertical: 20}}
        keyboardType="email-address"
        value={name}
        // onChangeText={name => setName(name)}
      />
      <MyTextInput
        placeholder="Phone number"
        style={{color: '#000'}}
        keyboardType="numeric"
      />
      <MyTextInput
        placeholder="Strong password"
        style={{color: '#000', marginVertical: 20}}
        secureTextEntry={true}
      />
      <MyButton title="Hello" />
      <MyButton title="Welsome" style={{marginVertical: 20}} />
      <MyButton title="To UL" />
    </View>
  );
}

const styles = StyleSheet.create({});
