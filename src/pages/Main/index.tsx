import React from 'react';

import {Container} from './styles';

import Header from '../../components/Header';
import MusicBar from '../../components/MusicBar';
import Favourites from '../../components/Favourites';

export default function Main() {
  return (
    <Container>
      <Header />
      <MusicBar />
      <Favourites />
    </Container>
  );
}
