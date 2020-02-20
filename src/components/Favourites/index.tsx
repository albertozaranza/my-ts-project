import React from 'react';

import {
  Container,
  Title,
  TitleContainer,
  ViewAll,
  SampleText,
  AlbumContainer,
  AlbumName,
  AlbumPhoto,
  AlbumSinger,
  InfoContainer,
  List,
} from './styles';

import albums from '../../data/albums';

const comprimedData = albums.slice(0, 4);

import {Album as AlbumProps} from '../types';

export default function Favourites() {
  return (
    <Container>
      <TitleContainer>
        <Title>My favourite ({comprimedData.length})</Title>
        <ViewAll>
          <SampleText>View all</SampleText>
        </ViewAll>
      </TitleContainer>

      <List
        data={comprimedData}
        scrollEnabled={false}
        renderItem={({item}: AlbumProps) => (
          <AlbumContainer>
            <AlbumPhoto source={item.avatar}></AlbumPhoto>
            <InfoContainer>
              <AlbumName>{item.name}</AlbumName>
              <AlbumSinger>{item.singer}</AlbumSinger>
            </InfoContainer>
          </AlbumContainer>
        )}
      />
    </Container>
  );
}
