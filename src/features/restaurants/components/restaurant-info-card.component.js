import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Image, Text, View } from "react-native";

import star from "../../../../assets/star";
import openIcon from "../../../../assets/open";
import { SvgXml } from "react-native-svg";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Pizza Hut",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    ],
    address = "New Jersey, 23000",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}

            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="label" style={{ color: "red" }}>
                  CLOSED TEMPORARILY
                </Text>
              )}

              <View style={{ marginLeft: 16 }} />
              {isOpenNow && <SvgXml xml={openIcon} width={20} height={20} />}

              <View style={{ marginLeft: 16 }} />
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
