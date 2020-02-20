import styled from 'styled-components/native';

export const Container = styled.FlatList`
  padding-horizontal: 16px;
`;

export const AlbumContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding-vertical: 5px;
`;

export const AlbumPhoto = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
  margin-left: 10px;
  justify-content: space-around;
`;

export const AlbumName = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const AlbumSinger = styled.Text`
  font-size: 14px;
  color: #666;
`;
