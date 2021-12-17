import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  margin: 15px 10px 0;  
  /* border-bottom: 1px solid #dddddd; */
`;

const Avatar = styled.View`
	img {
		vertical-align: middle;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	margin-right:10px;
`

const Description = styled.Text`
  font-size: 18px;
  line-height:30px;
  /* color:${props => props.color}; */
`


const PersonCard = (props) => {
  const { person } = props;
  const {  name, meetingOrigin, talkingTime, physicalAltercations, timeLine } = person;
  const firstName = name.split(" ")[0]
  return (
    <Container>
      {/* <Avatar>	 */}
						<Image src={require(`../../assets/navIcons/list.png`)} name={name}/>
			{/* </Avatar> */}
      <Description>{meetingOrigin}</Description>
    </Container>
  );
};

export default PersonCard;
