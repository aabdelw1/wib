import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components/native'
import { Query } from 'react-apollo'
import Queries from '../graphql/queries'
import { AppContext } from '../App';
import List from './List';

export default function Home() {

  return (
      <AppContext.Consumer>
        {
          ({ email, password, firstName, lastName, gender, doa, groups, flames }) =>
        <SafeAreaView>
          <List flames={flames}/>
        </SafeAreaView>
        }       
      </AppContext.Consumer>

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

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;


