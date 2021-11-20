import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'
import { Query } from 'react-apollo'
import Queries from '../graphql/queries'
import { AppContext } from '../App';

export default function Home() {

  return (
      <AppContext.Consumer>
        {
          ({ email, password, firstName, lastName, gender, doa, groups, flames }) =>
        <Container>
          <Text>Helo</Text>
          <StatusBar style="auto" />
        </Container>
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
  background-color: orange;
  align-items: center;
  justify-content: center;
`;


