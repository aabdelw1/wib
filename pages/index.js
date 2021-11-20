import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Query } from 'react-apollo'
import Queries from '../graphql/queries'

export default function Index() {

  return (

      <View style={styles.container}>
        <Query query={Queries.ALL_USERS}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        </Query>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
