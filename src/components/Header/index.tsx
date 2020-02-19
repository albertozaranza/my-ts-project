import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

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

  const {id} = useSelector(({music}) => music);

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
            <Small>{id}</Small>/30
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
