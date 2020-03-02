import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Creators as MusicActions} from '../../store/ducks/music';

import {
  Container,
  Header,
  Title,
  IconLabel,
  IconContainer,
  InfoContainer,
  AlbumPhoto,
  Play,
  MusicContainer,
  MusicLabel,
  Back,
  SampleText,
} from './styles';

import {Music as MusicProps} from '../../components/types';

export default function Music() {
  const {name, albumPhoto, paused} = useSelector(
    ({music}: MusicProps) => music,
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handlePause() {
    dispatch(MusicActions.pause());
  }

  return (
    <Container>
      <Header>
        <Back>
          <Icon
            name="arrow-back"
            color="#fff"
            onPress={() => navigation.goBack()}
            size={25}
          />
        </Back>
        <MusicLabel>
          <InfoContainer>
            <Title>{name}</Title>
            <IconContainer>
              <IconLabel>
                <Icon name="remove-red-eye" color="#fff" size={14} />
                <SampleText>3M</SampleText>
              </IconLabel>
              <IconLabel>
                <Icon name="thumb-up" color="#fff" size={14} />
                <SampleText>115K</SampleText>
              </IconLabel>
            </IconContainer>
          </InfoContainer>
          <MusicContainer>
            <AlbumPhoto source={albumPhoto} />
            <Play onPress={handlePause}>
              <Icon
                name={paused ? 'play-arrow' : 'pause'}
                color="#fff"
                size={40}
              />
            </Play>
          </MusicContainer>
        </MusicLabel>
      </Header>
    </Container>
  );
}
