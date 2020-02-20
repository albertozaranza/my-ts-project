import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

import {Container, Header, Title} from './styles';

import albums from '../../data/albums';

import List from '../../components/List';

export default function Favourites() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Icon
          name="arrow-back"
          color="#fff"
          onPress={() => navigation.goBack()}
          size={25}
        />
        <Title>Favourites</Title>
      </Header>
      <List data={albums} scrollEnabled={true} />
    </Container>
  );
}
