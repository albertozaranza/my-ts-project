import React, {useState, useEffect} from 'react';
import {Animated, Easing, Dimensions} from 'react-native';
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
  ForwardButton,
  PausedButton,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

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
    }),
  );

  const buttonsAnimation = Animated.timing(scale, {
    toValue: hide ? 0 : 1,
    duration: 200,
    delay: hide ? 0 : 400,
    easing: Easing.linear,
  });

  const musicInfoAnimation = Animated.timing(opacity, {
    toValue: hide ? 0 : 1,
    duration: 200,
    delay: hide ? 0 : 300,
    easing: Easing.linear,
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
            source={require('../../assets/rock.jpeg')}
          />
          <Blank />
        </AlbumPhotoContainer>
        <MusicInfo style={{opacity}}>
          <Music>Best 15 rock</Music>
          <Status>{paused ? 'Paused' : 'Now playing'}</Status>
        </MusicInfo>
      </AlbumContainer>

      <ButtonsContainer
        style={{
          transform: [{scaleX: scale}, {scaleY: scale}],
          opacity,
        }}>
        <PausedButton onPress={handlePause} paused={paused}>
          <Icon
            name={paused ? 'play-arrow' : 'pause'}
            color={paused ? '#eee' : '#0057ff'}
            size={15}
          />
        </PausedButton>
        <ForwardButton disabled={paused} paused={paused}>
          <Icon
            name="fast-forward"
            color={paused ? '#0057ff' : '#eee'}
            size={15}
          />
        </ForwardButton>
      </ButtonsContainer>
    </Container>
  );
}
