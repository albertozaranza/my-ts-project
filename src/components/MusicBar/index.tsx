import React, {useState, useEffect} from 'react';
import {Animated, Easing, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  AlbumPhoto,
  Music,
  Status,
  MusicInfo,
  AlbumContainer,
  ButtonsContainer,
  AlbumPhotoContainer,
  Blank,
} from './styles';

import IconButton from '../IconButton';

import {Creators as MusicActions} from '../../store/ducks/music';

import {Music as MusicProps} from '../types';

const {width} = Dimensions.get('window');
const widthSize = width - 32;
const widthSizeTranslate = width - 101;

export default function MusicBar() {
  const [paused, setPaused] = useState(true);
  const [hide, setHide] = useState(false);
  const [rotation, setRotation] = useState(new Animated.Value(0));
  const [scale, setScale] = useState(new Animated.Value(1));
  const [opacity, setOpacity] = useState(new Animated.Value(1));
  const [width, setWidth] = useState(new Animated.Value(widthSize));
  const [translateX, setTranslateX] = useState(new Animated.Value(0));

  const {name, albumPhoto} = useSelector(({music}: MusicProps) => music);

  const dispatch = useDispatch();

  useEffect(() => {
    handleAlbumPhotoAnimation();
  }, [paused]);

  useEffect(() => {
    handleMusicBarAnimation();
  }, [hide]);

  const albumPhotoAnimation = Animated.loop(
    Animated.timing(rotation, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );

  const buttonsAnimation = Animated.timing(scale, {
    toValue: hide ? 0 : 1,
    duration: 200,
    delay: hide ? 0 : 400,
    easing: Easing.linear,
    useNativeDriver: true,
  });

  const musicInfoAnimation = Animated.timing(opacity, {
    toValue: hide ? 0 : 1,
    duration: 200,
    delay: hide ? 0 : 300,
    easing: Easing.linear,
    useNativeDriver: true,
  });

  const widthAnimation = Animated.timing(width, {
    toValue: hide ? 69 : widthSize,
    duration: 500,
    easing: Easing.linear,
  });

  const translateWidthAnimation = Animated.timing(translateX, {
    toValue: hide ? widthSizeTranslate : 0,
    duration: 500,
    easing: Easing.linear,
  });

  function handleAlbumPhotoAnimation() {
    if (!paused) albumPhotoAnimation.start();
    else {
      albumPhotoAnimation.stop();
      rotation.setValue(0);
    }
  }

  function handleMusicBarAnimation() {
    buttonsAnimation.start();
    musicInfoAnimation.start();
    widthAnimation.start();
    translateWidthAnimation.start();
  }

  function handleMusicBar() {
    setHide(!hide);
  }

  function handlePause() {
    setPaused(!paused);
  }

  function handleNext() {
    dispatch(MusicActions.nextMusic());
  }

  return (
    <Container
      style={{
        width,
        transform: [{translateX}],
      }}>
      <AlbumContainer>
        <AlbumPhotoContainer onPress={handleMusicBar}>
          <AlbumPhoto
            style={{
              transform: [
                {
                  rotate: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
            source={albumPhoto}
          />
          <Blank />
        </AlbumPhotoContainer>
        <MusicInfo style={{opacity}}>
          <Music>{name}</Music>
          <Status>{paused ? 'Paused' : 'Now playing'}</Status>
        </MusicInfo>
      </AlbumContainer>

      <ButtonsContainer
        style={{
          transform: [{scaleX: scale}, {scaleY: scale}],
          opacity,
        }}>
        <IconButton
          onPress={handlePause}
          paused={paused}
          name={paused ? 'play-arrow' : 'pause'}
        />
        <IconButton
          onPress={handleNext}
          disabled={paused}
          paused={paused}
          name="fast-forward"
        />
      </ButtonsContainer>
    </Container>
  );
}
