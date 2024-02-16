
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';


const Login = ({navigation}) => {
  return (
    <View>
      <Button
        title="Navigate to any Screen"
        onPress={() => {
          navigation.navigate('Home', {
            id: 1,
          });
        }}
      />
    </View>
  );
};


export default Login;


const styles = StyleSheet.create({});
