import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ApolloClient from "apollo-boost";
import { Query, ApolloProvider } from 'react-apollo'
import Queries from './graphql/queries'
import Home from './pages/Home';

export const AppContext = React.createContext({ data: { user: null } });
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Query query={Queries.ALL_USERS}>
        {({ loading, error, data }) => {
              if (loading || error) return <ActivityIndicator size="large" color="#0000ff" />
              console.log(data)
              return (
                <AppContext.Provider value={{...data.user}} style={styles.container}>
                  <Home />
                </AppContext.Provider>
              )
            }}
      </Query>
    </ApolloProvider>
  );
}

const styles = {
  container: {
    flex: 1
  }
};