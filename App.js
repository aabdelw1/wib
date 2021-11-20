import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Query } from 'react-apollo'
import Queries from './graphql/queries'
import Index from './pages/index';

export default function App() {

  const client = new ApolloClient({
    uri: 'localhost:4000/graphql',
    cache: new InMemoryCache()
  });


  return (
    <ApolloProvider client={client}>
      <Index/>
    </ApolloProvider>
  );
}

