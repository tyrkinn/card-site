import { Container, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
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
  }));

export const App = () => {
  return (
    <Container maxW='container.lg'>
      <Heading size="3xl" pb={20} pt={10}>Системный миръ. Карточная игра</Heading>
      <SimpleGrid columns={4} gridGap={5}>
        {decks.map((f, i) => (
          <GridItem key={i}>
            <Deck {...f}></Deck>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default App;
