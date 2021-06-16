import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetail = ({ route }) => {
  const [breakfastExpand, setBreakfastExpand] = useState(false);
  const [lunchExpand, setLunchExpand] = useState(false);
  const [dinnerExpand, setDinnerExpand] = useState(false);
  const [drinksExpand, setDrinksExpand] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={() => setBreakfastExpand(!breakfastExpand)}
        >
          <List.Item title="Eggs Bendict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={() => setLunchExpand(!lunchExpand)}
        >
          <List.Item title="Burger /w files" />
          <List.Item title="Steak Sandwitch" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={() => setDinnerExpand(!dinnerExpand)}
        >
          <List.Item title="Plaow Rice" />
          <List.Item title="Javascript Fried" />
          <List.Item title="Python with sos" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={() => setDrinksExpand(!drinksExpand)}
        >
          <List.Item title="Hyper Text Markup Food" />
          <List.Item title="CaseCading Style Juice" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
