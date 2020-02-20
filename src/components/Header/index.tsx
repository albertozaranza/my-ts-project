import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Music as MusicProps} from '../types';

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

  const {id, albumLength} = useSelector(({music}: MusicProps) => music);

  useEffect(() => {
    if (favourite) Alert.alert('Favourited');
  }, [favourite]);

  function handleFavourite() {
    setFavourite(!favourite);
  }

  return (
    <Container>
      <Header>
        <RadioContainer>
          <Date>
            <Small>{id}</Small>/{albumLength}
          </Date>
          <Title>Michael Jackson</Title>
          <MusicInfo>115k+ favourite</MusicInfo>
        </RadioContainer>

        <FavouriteButton onPress={handleFavourite} favourite={favourite}>
          <Icon name="star" size={30} color={favourite ? '#333' : '#fff'} />
        </FavouriteButton>
      </Header>
    </Container>
  );
}
