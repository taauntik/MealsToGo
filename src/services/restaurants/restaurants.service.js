import { mockImages, mocks } from "./mock/";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurants) => {
    restaurants.photos = restaurants.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurants,
      isClosedTemporarily: restaurants.business_status === "CLOSED_TEMPORARILY",
      isOpenNow:
        restaurants.opening_hours && restaurants.opening_hours.open_now,
    };
  });

  console.log(mappedResults);

  return camelize(mappedResults);
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => console.log(transformedResponse))
  .catch((error) => console.log("Hey Auntik You've got an error"));
