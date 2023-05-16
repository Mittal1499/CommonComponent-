import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyTextInput from './src/commomComponents/MyTextInput';
import MyButton from './src/commomComponents/MyButton';
import RegisterScreen from './src/screens/RegisterScreen';
import Login from './src/screens/Login';

export default function App() {
  return <RegisterScreen />;
}

const styles = StyleSheet.create({});
