import styled from 'styled-components/native';

import {FavouriteButton as FavouriteButtonProps} from '../types';

export const Container = styled.View`
  height: 200px;
  justify-content: center;
`;

export const Header = styled.View`
  flex: 3;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #000;
`;

export const RadioContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  margin-bottom: 6px;
`;

export const Date = styled.Text`
  margin-bottom: 8px;
  font-size: 24px;
  color: #fff;
`;

export const Small = styled.Text`
  font-size: 18px;
`;

export const MusicInfo = styled.Text`
  color: #fff;
`;

export const FavouriteButton = styled.TouchableOpacity<FavouriteButtonProps>`
  height: 50px;
  width: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${({favourite}) => (favourite ? '#fff' : '#333')};
`;
