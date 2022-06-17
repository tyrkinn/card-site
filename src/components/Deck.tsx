import { useState } from 'react';
import { Image } from '@chakra-ui/react';

const getRndInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min) ) + min;

export interface DeckProps {
  suit: string;
  face: string;
  cards?: string[];
}


export const Deck: React.FC<DeckProps> = ({suit, face, cards}) => {
  const [image, setImage] = useState(suit);
  const getRandomCard = () => {
    return cards ? cards.at(getRndInteger(0, cards.length))! : face
  }

  const toggleCard = () => {
    if(image !== suit) {
      return setImage(suit);
    }
    setImage(getRandomCard())
  }

  return (
    <Image 
      src={image}
      onClick={toggleCard}
    />
  )
}