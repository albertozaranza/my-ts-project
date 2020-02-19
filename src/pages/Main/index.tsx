import React from 'react';

import {Container} from './styles';

import Header from '../../components/Header';
import MusicBar from '../../components/MusicBar';

export default function Main() {
  return (
    <Container>
      <Header />
      <MusicBar />
    </Container>
  );
}
