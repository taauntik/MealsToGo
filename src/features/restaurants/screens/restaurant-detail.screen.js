import React, { useState } from "react";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetail = ({ route }) => {
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinksExpand, setDrinksExpand] = useState(false);

  const { item } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={item} />
    </SafeArea>
  );
};
