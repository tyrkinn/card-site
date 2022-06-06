import { useState } from 'react';
import { Image } from '@chakra-ui/react';

export interface DeckProps {
  suit: string;
  face: string;
}


export const Deck: React.FC<DeckProps> = ({suit, face}) => {
  const [image, setImage] = useState(suit);
  return (
    <Image 
      src={image}
      onClick={() => setImage(face)}
    />
  )
}