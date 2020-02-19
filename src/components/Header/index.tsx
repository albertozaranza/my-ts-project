import React, {useState, useEffect} from 'react';
import {View, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Title,
  FavouriteButton,
  Date,
  RadioContainer,
  MusicInfo,
  Small,
} from './styles';

export default function Main() {
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    if (favourite) Alert.alert('Rádio favoritada');
  }, [favourite]);

  function handleFavourite() {
    setFavourite(!favourite);
  }

  return (
    <Container>
      <Header>
        <RadioContainer>
          <Date>
            <Small>25</Small>/30
          </Date>
          <Title>Radio 160</Title>
          <MusicInfo>115k+ favourite</MusicInfo>
        </RadioContainer>

        <FavouriteButton onPress={handleFavourite} favourite={favourite}>
          <Icon name="star" size={30} color={favourite ? '#333' : '#fff'} />
        </FavouriteButton>
      </Header>
    </Container>
  );
}
