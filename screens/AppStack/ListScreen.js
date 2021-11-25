import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import People from "../../components/list/People";
import Header from "../../components/list/Header";

const ListScreen = (props) => {
  const { flames } = props;
  return (
    <Container>
      <Header />
      <People />
    </Container>
  );
};

// {
//   flames.map((i, key) => {
//    return <Text>{i.name}</Text>
//   })
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
  },
});

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export default ListScreen;
