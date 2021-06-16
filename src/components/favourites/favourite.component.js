import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = () => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  return (
    <FavouriteButton>
      <AntDesign name="heat" size={24} color="red" />
    </FavouriteButton>
  );
};
