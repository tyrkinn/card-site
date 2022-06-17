import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Deck } from "./components/Deck";

const decks = [
  "actions",
  "art",
  "battle",
  "emotion",
  "events",
  "locations",
  "money",
  "pet",
  "quests",
  "resources",
  "rumors",
  "skills",
  "state",
  "substances",
  "talants",
  "training",
  "transport",
  "trophies",
  "units",
  "upgrade",
  "weather",
]
  .map((f) => `/assets/${f}/`)
  .map((f) => ({
    suit: f + "suit.jpg",
    face: f + "face.jpg",
    cards: f.endsWith("trophies/")
      ? new Array(5).fill(`${f}card`).map((c, i) => c + (i + 1) + ".jpg")
      : undefined,
  }));

export const App = () => {
  useEffect(() => {
    console.log(decks);
  }, []);
  return (
    <React.Fragment>
      <Container maxW="container.xl">
        <Heading size="3xl" pb={20} pt={10}>
          Системный миръ. Карточная игра
        </Heading>

        <SimpleGrid columns={3} gridGap={10} px={5}>
          {decks.map((f, i) => (
            <GridItem key={i}>
              <Deck {...f}></Deck>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </React.Fragment>
  );
};

export default App;
