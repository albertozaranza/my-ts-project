import styled from 'styled-components/native';

import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 33%;
  padding: 16px;
  background-color: #000;
`;

export const Title = styled.Text`
  margin-bottom: 14px;
  font-size: 20px;
  color: #fff;
`;

export const SampleText = styled.Text`
  margin-left: 6px;
  font-size: 12px;
  color: #fff;
`;

export const IconLabel = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding-vertical: 6px;
  padding-horizontal: 10px;
  border-radius: 50px;
  background-color: #333;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const InfoContainer = styled.View``;

export const AlbumPhoto = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

export const Play = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #333;
  position: absolute;
  top: 25px;
  left: -25px;
`;

export const MusicContainer = styled.View`
  position: relative;
`;

export const Back = styled.View`
  padding-top: ${Platform.OS === 'ios' ? '16px' : 0};
`;

export const MusicLabel = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
