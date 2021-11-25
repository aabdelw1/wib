import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


const SignInScreen = () => (
  <View style={styles.container}>
  <Text>Sign In Screen</Text>
    <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
  </View>

)

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4361EE',
    justifyContent: 'center',
    alignItems: 'center'

  }
})
