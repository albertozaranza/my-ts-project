import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, Title, TitleContainer, ViewAll, SampleText} from './styles';

import albums from '../../data/albums';

import List from '../List';

const comprimedData = albums.slice(0, 4);

export default function Favourites() {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleContainer>
        <Title>My favourite ({comprimedData.length})</Title>
        <ViewAll onPress={() => navigation.navigate('Favourites')}>
          <SampleText>View all</SampleText>
        </ViewAll>
      </TitleContainer>
      <List data={comprimedData} scrollEnabled={false} />
    </Container>
  );
}
