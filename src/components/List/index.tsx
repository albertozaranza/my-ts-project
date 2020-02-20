import React from 'react';

import {
  Container,
  AlbumContainer,
  AlbumName,
  AlbumPhoto,
  AlbumSinger,
  InfoContainer,
} from './styles';

import {Album as AlbumProps} from '../types';

export default function List({data, scrollEnabled}) {
  return (
    <Container
      data={data}
      scrollEnabled={scrollEnabled}
      keyExtractor={item => item.id.toString()}
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
  );
}
