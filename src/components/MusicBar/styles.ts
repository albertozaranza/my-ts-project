import styled from 'styled-components/native';
import {Animated, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = Animated.createAnimatedComponent(
  styled.View`
    width: ${width - 32}px;
    height: 65px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: -25px;
    margin-left: 16px;
    margin-right: 16px;
    padding: 10px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
    elevation: 1;
  `,
);

export const AlbumPhoto = Animated.createAnimatedComponent(styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
`);

export const Music = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Status = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const MusicInfo = Animated.createAnimatedComponent(styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`);

export const AlbumContainer = styled.View`
  flex-direction: row;
`;

export const AlbumPhotoContainer = Animated.createAnimatedComponent(
  styled.TouchableOpacity`
    position: relative;
  `,
);

export const Blank = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: #fff;
  position: absolute;
  top: 18px;
  left: 18px;
`;

export const ButtonsContainer = Animated.createAnimatedComponent(styled.View`
  width: 70px;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
`);
